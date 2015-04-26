##[Weavie](http://weavie.techgno.com)##
Visualizing the weave draft.

####What's a weave draft?####
A "Weave Draft" is a system of grids that describes how to set up a loom. [This page describes it well](http://www.weaverscraft.com/hints.html).

#####The layout#####
There are three grids on a weave draft.

1. The grid on the top-left of a weave draft tells the weaver to attach warp threads to harnesses. 
2. The grid on the top-right tells the weaver to attach the harnesses to treadles. It describes the various combinations of harnesses that will be lifted throughout the weave.
3. The grid on the right tells the weaver when to use which treadle. It describes which warps should be lifted at each pass of the shuttle.

###Weavie: what is it and how does it work?###
Weavie is a weave draft maker. It, like a weave draft, is split into three grids (`.hGrid`, `.tieUp`, and  `.treadleGrid`). Then Weavie has a `.weaveBox` that displays the pattern described by the selection of buttons on the three grids. 

The three important files at this point are `/public/js/try.js`, `/public/css/tweaks2.css` and `/app/views/try.php`. Weavie is a Laravel project. In the future, I'll add the ability to save patterns and maybe a user management system.. so there will be more database interactions and Laravel will help. But, right now, there's no big reason for it.

...instead of trying to blurt everything out at once, let's just walk through what happens when users make weave patterns with Weavie. And, it's even easier to understand my rambling if you take a look at Weavie in action [here](http://weavie.techgno.com).

####1. Start building a WIF file####
The first important thing Weavie does is to define a bunch of properties of a `WIF` object. We'll use this to collect information that we need to create a `WIF` file. We could have just printed straight into a `txt` file, but I figured that things would be easier to add/takeaway, everything would be more manageable, if we built a `WIF` object while the user is interacting with the grids.

#####What's a WIF file?#####
Go [here](http://www.mhsoft.com/wif/wif1-1.txt) to learn a bunch of useful stuff about WIFs. But, the short story (from the specification) is this: 
>"Prior to WIF each weaving program used its own format for storing weave information.  Each format is especially suited to the individual program, but does not lend itself to translation across programs.  In addition, files are machine readable only. WIF is designed to [address these problems and] bridge the gap between programs."

####2. `.hGrid`: attach warps to harnesses####

Let's take a look at what happens when the user attaches a warp thread to a harness:
```javascript
  //when users click a harnessButton...
  $(".harnessButton").click(function() {
  	//find out which thread this button corresponds with
        var thread = $(this).parent().attr('id');
        //find out which harness, or 'shaft', this button corresponds with
        var shaft = $(this).attr('class').split(" ");
        var shaft = shaft[1].replace(/\D/g, '');
        
        //manage hgrid buttons, activate and disactivate all siblings
        $(this).siblings().removeClass('activeButton');
        $(this).addClass("activeButton");
        
        //deselect tieup buttons, because our threading has changed we'll make the user reset the tie up grid
        for(col = 0; col < colNum; col++){
        		
		     	for(t = 0; t < harnessNumber; t++){
				  if(t == shaft){
				 		 $('.tie'+col+' #tRow'+shaft).css('background', '');
				 	}
		    	}
		   }
	//then remove all harness and treadle classes from the warp thread associated with this button
        $('.warp' + thread).alterClass("harness*");
        $('.warp' + thread).alterClass("treadle*");
        //and finally add the harness associated with the button to the associated thread
        $('.warp' + thread).addClass('harness'+shaft);
        //add the shaft to the thread in the WIF object
        WIF.THREADING[thread] = shaft;
    });
```
		
####3. `.tieUp`: attach harnesses to treadles####

The Tie Up Grid is the next step in the weave drafting process. With Weavie's `.tieUp` box, when you click a button, the corresponding `.treadle***` class is added to all elements within the `.weaveBox` that have the corresponding `.harness***` class. 

Let's take a look at what that looks like:
```javascript
 	
//when users click a tieUp button...
$(".tieButton").funcToggle('click', function() {
	//find the treadle that's associated with the button
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        //then find the harness associated with this button
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
        //these two do the exact same thing, except I don't add the string, i just keep the number.
        var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
	//we gotta remove the active state of the treadling buttons so users will know that they have to reset the treadle grid... this is in case they have already set up treadling and they are coming back to change the tieUp patterns (tie up patterns means: which harnesses are attached to which treadles).
        $('.treadleGridCol'+treadle).css('background', '');
	//make this button active looking
        $(this).css('background', 'grey');
	
        //if we haven't set up attached any harnesses to this treadle yet just go ahead and do it
        if( WIF.TIEUP[treadle] == null ){
             WIF.TIEUP[treadle]= [harness];
        } 
        //if we've already added a harness to this treadle, just push this harness into the array associated with the treadle
        else {
             WIF.TIEUP[treadle].push(harness);
             }
        //and then actually add the treadle to the warp elements that have been marked with the harness* class.
        $('.' + findHarness).addClass(findTreadle);
        

    }, 
    //this is the other side of the toggle. when they deselect the button by clicking it again
    function() {
    	//deactivate this button.
    	$('.treadleGridCol'+treadle).css('background', '');
    	//get the harness and treadle again
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
	var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
	
	//find that harness number in the array contained within the object, and get rid of it.
	var index = WIF.TIEUP[treadle].indexOf(harness);
	//if we find it, kill it	  
	if (index > -1) {
   		IF.TIEUP[treadle].splice(index, 1);
	}
	//deactivate this button
        $(this).css('background', '');
        //remove treadle from this harness
        $('.' + findHarness).removeClass(findTreadle);
    });
```
We use the parent of the tie button, which is the row, to find the corresponding treadle. So, for example: clicking the `.tie0 > .tRow3` button will take the parent `.tie0` and get rid of all non-numeric characters, leaving us with '0'. Then, we can just add that to the end of 'treadle' and we're ready to add the appropriate treadle class to all elements with the appropriate harness class. The same kind of thing happens when we go to find the appropriate harness, except we just use `this` because the row number of whatever button that was clicked will correspond to the harness number. 

####4. `.treadleGrid`: activate pattern / push treadle####

And, the pattern repeats... When we click a button within the `.treadleGrid` (the grid to the right of the `.weaveBox`), all of which have the `.treadlePush` class, we get the classes of `this` element and split them by ' ' (space), then we take the second class (`findTreadle[1]`) and remove all non-numeric characters. Now we know which treadle to add (because the columns in this grid correspond to the treadles that were added in the `.tieUp` grid). 

Now, we need to know which `.pass***` we're on. Each `.pass***` represents 'passing' the shuttle through the warps. To find the pass, we take the id of `this` element's parent (the parent of `this` is the row, which corresponds with the pass) and remove all non-numeric characters from it and we're left with a clean identifier of the `.pass`.

Sounds like giberish? Take a look:

```javascript
$(".treadlePush").click(function() {
	//this will have multiple classes, we need to split them by space and get at the one that matters to us
        var findTreadle = $(this).attr('class').split(" ");
        //now, select the class we want and remove all non-numeric characters
        var findTreadle = findTreadle[1].replace(/\D/g, '');
        //figure out which pass we're on
        var findPass = $(this).parent().attr('class').replace(/\D/g, '');
        //make this button grey, and get rid of the grey on all previously selected buttons
        $(this).css("background", "grey");
        $(this).siblings().css("background", "");
        //remove the above class on the whole pass, so we can reset it if the user has already set it
        $('.pass' + findPass).removeClass("above");
        //now, we look for elements with the right treadle number on the right 'pass' and we add the above class which sets the z-index above the weft's z-index (which is 1, so the above class sets the z-index to 2)
        var findThis = '.treadle' + findTreadle + '.pass' + findPass;
        $(findThis).addClass("above");
        //and finally, add this selection to our object.
        WIF.TREADLING[findPass] = findTreadle;
    });
```
####5. Colors####

We're using [spectrum](https://bgrins.github.io/spectrum/) to handle the color picking. It's sweet.

WIF files have COLOR TABLE, WARP COLORS and WEFT COLORS sections. COLOR TABLE is all the colors we're using in this pattern. So, when a user selects a color, it gets added to the table, unless it is already there. Then, when we find out that the color has already been added, or when we add it, we get the index of that element of the array so that we can use it to set a warp or weft thread to a color that has been added to the table. For example, our color table might have something like: 1: '255,255, 0, 0', so in the warp colors section, to set this color to warp1, we'd say: 1:1

The code looks like this (this is for wefts, but warps are the same):
```javascript
 $(".weftBasic").spectrum({
        color: "#f00",
        change: function(color) {
            weftColorChosen = color.toHexString();
            //convert to rgb and get rid of evertyhing but the numbers and some punctuation
            rgbColor =  color.toRgbString().replace(/[^0-9$.,]/g, '');
            //when the user clicks the weft color box, it will run the function below and pass our color in hex and rgb string format
            setWeftColor(weftColorChosen, rgbColor);
        }
    });
    

    function setWeftColor(weftColorChosen, rgbColor) {
        $(".weftColorButton").click(function() {
		//find out which weft thread we're working with
            	var weftID = ($(this).attr('id'));
            	$('.weft' + weftID).css("background", weftColorChosen);
            	//use jQuery's .inArray to find out if this color is already in the table
           	colorTableIndex = $.inArray(rgbColor, WIF["COLOR TABLE"]);
           	//if the color is not in the table, push it in
            	if(colorTableIndex == -1){
            		WIF["COLOR TABLE"].push(rgbColor);
            		//now that we've pushed it, find the index so we can use it in the weft colors section
           		weftColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           		//add this color to the weft colors section
           		WIF["WEFT COLORS"][weftID] = weftColorIndex;
           	
           	} 
           //if it's already there
        	else {
           		//find the index of the element in the array where that rgbColor is found
           		warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           		//and add it to the weft colors table
        		WIF["WEFT COLORS"][weftID] = weftColorIndex;
        		;
		}
        });
}
```
By the time the user is done clicking, we'll have a nice object that we could easily print into a .WIF file, or pass JSON along to some other program.

Thanks for looking at Weavie.


