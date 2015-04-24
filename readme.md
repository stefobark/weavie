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

And, when users interact with the grids we'll be adding and taking away elements of an object. Soon, I'll make a button to let users download a .wif file.

Instead of trying to blurt everything out at once, let's just walk through what happens when users make weave patterns with Weavie. And, it's even easier to understand my rambling if you take a look at Weavie in action [here](http://weavie.techgno.com).

####`.hGrid`: attach warps to harnesses####

Clicking the top right grid (`.hGrid`), which is read from right to left, will add the corresponding `.harness***` class to all elements with the corresponding `warp***` class (i.e., `.warp1`, `.warp2`, etc..) within the `.weaveBox`. For example, clicking the bottom button (`.hGridRow3`) on the far right column (`.hGridCol1`) of `.hGrid` will add the `.harness0` class to the divs within `.weaveBox` that have the `.warp1` class.

For example, here's what happens when you click a button within the `.hGrid`.
```javascript
  $(".hGridRow3").click(function(){
    			//because there are as many .hGrid columns as there are .warp*s, by getting the id of 'this' button's parent, we find the corresponding warp that clicking this button relates to.
			var thread = $(this).parent().attr('id');
			//the harness we'll be attaching the thread to
			var shaft = 0;
			//remove the dark grey from previously selected buttons
			$(this).siblings().removeClass('activeButton');
			//make the clicked button grey
			$(this).addClass("activeButton");
			//use parent's ID to remove all previously selected harnesses
			$('.warp' + thread).alterClass("harness*");
			//use parent's ID to attach the harness to the thread
			$('.warp' + thread).addClass('harness0');
			//finally, add this thread to the WIF object we're building
			WIF.THREADING[thread] = shaft;
		});
```
		
####`.tieUp`: attach harnesses to treadles####

The Tie Up Grid is the next step in the weave drafting process. With Weavie's `.tieUp` box, when you click a button, the corresponding `.treadle***` class is added to all elements within the `.weaveBox` that have the corresponding `.harness***` class. For example, clicking the bottom left button (`.tie0 > .tRow3`) will add `.treadle0` to all elements within `.weaveBox` with `.harness0`.

Below, you can see that on the first click of `.tieButton` we're adding `.harness**` classes to elements that have this `.treadle**` class.
```javascript
$(".tieButton").funcToggle('click', function() {
	//find the treadle and harness so we can make our harness combos
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = '.harness' + $(this).attr('id').replace(/\D/g, '');
        //I just needed the number attached to the end of these class names
        var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
        
        //if we haven't set up this treadle yet add the first harness to an array within this WIF.TIEUP object
        if( WIF.TIEUP[treadle] == null ){
             WIF.TIEUP[treadle]= [harness];
        } 
        //or else, we've already added some harnesses to this treadle, push new elements to the array
        else {
             WIF.TIEUP[treadle].push(harness);
             }
       //actually add the harness class to the treadle elements
        $(findHarness).addClass(findTreadle);
       //turn this button grey.. when it get's clicked again, the grey will be removed
        $(this).css('background', 'grey');
        //print it to the console so we can be sure our object is actually there
        console.log(WIF.TIEUP);

    }, function() {
    	//same thing as above
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
	var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
		  
	//find that harness number in the array contained within the object, so we can get rid of it.
	var index = WIF.TIEUP[treadle].indexOf(harness);
	
	//now that we've found the harness in the array, splice will get rid of it
	if (index > -1) {
   		WIF.TIEUP[treadle].splice(index, 1);
	}
	//do things make sense? looking at the whole object will let us know.
	console.log(WIF);
	//remove the grey background of the button
        $(this).css('background', '');
        //remove this treadle from this harness
        $(findHarness).removeClass(findTreadle);
    });
```
We use the parent of the tie button, which is the row, to find the corresponding treadle. So, for example: clicking the `.tie0 > .tRow3` button will take the parent `.tie0` and get rid of all non-numeric characters, leaving us with '0'. Then, we can just add that to the end of 'treadle' and we're ready to add the appropriate treadle class to all elements with the appropriate harness class. The same kind of thing happens when we go to find the appropriate harness, except we just use `this` because the row number of whatever button that was clicked will correspond to the harness number. 

####`.treadleGrid`: activate pattern / push treadle####

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
        //and finally, add this selection to our object and log it to the console.
        WIF.TREADLING[findPass] = findTreadle;
 	console.log(WIF.TREADLING);
    });
```
###Colors###

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
           		//print to console to make sure things make sense
           		console.log(WIF)
           	} 
           //if it's already there
        	else {
           		//find the index of the element in the array where that rgbColor is found
           		warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           		//and add it to the weft colors table
        		WIF["WEFT COLORS"][weftID] = weftColorIndex;
        		//log to console!
           		console.log(WIF);
		}
        });
}
```
By the time the user is done clicking, we'll have a nice object that we could easily print into a .WIF file, or pass JSON along to some other program.

Thanks for looking at Weavie.
