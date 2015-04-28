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
Weavie is a weave draft maker. It, like a weave draft, is split into three grids (`.hGrid`, `.tieUp`, and  `.treadleGrid`). Then Weavie has a `.weaveBox` that displays the pattern the user has described by selecting buttons on the three grids. At this point, users are forced to work from the top-right grid, to the top-left grid, and finally to the grid on the right. Otherwise, things get weird.

And, fyi: Weavie is a Laravel project. The important files at this point are `/public/js/try.js`, `/public/css/tweaks2.css`, `/app/controllers/HomeController.php`, `/app/routes.php` and `/app/views/try.php`.

...instead of trying to blurt everything out at once, let's just walk through what happens when users make weave patterns with Weavie. And, it's even easier to understand my rambling if you take a look at Weavie in action [here](http://weavie.techgno.com).

####1. Get user input ####
The first thing a Weavie user sees is a form asking for weave essentials. At this point, users can choose:
	1. The number of warp threads
	2. The number of weft threads
	3. the number of treadles

But, pretty soon, they'll also be able to define the number of harnesses and set "Ends Per Inch" (which, I'm thinking, we could use to define the size of columns width/row height of the weaveBox... but I'm not sure what to do yet).

####2. Start building a WIF file####
The first awesome thing Weavie does is to take user input and define a bunch of properties of a `WIF` object. We'll ultimately use this object to create a `WIF` file. We could have just printed straight into a `txt` file, but I figured that things would be easier to add/takeaway, everything would be more manageable, if we built a `WIF` object while the user is interacting with the grids.

#####What's a WIF file?#####
Go [here](http://www.mhsoft.com/wif/wif1-1.txt) to learn a bunch of useful stuff about WIFs. But, the short story (from the specification) is this: 
>"Prior to WIF each weaving program used its own format for storing weave information.  Each format is especially suited to the individual program, but does not lend itself to translation across programs.  In addition, files are machine readable only. WIF is designed to [address these problems and] bridge the gap between programs."

####3. `.hGrid`: attach warps to harnesses####

The first grid that users need to play with is the `.hGrid`. Its job is to attach warp threads to harneses. Let's take a look at what happens here:
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
	//then remove all harness and treadle classes from the warp thread associated with this button.. because things get messed up when they change settings if we don't reset this stuff
        $('.warp' + thread).alterClass("harness*");
        $('.warp' + thread).alterClass("treadle*");
        //and finally add the harness associated with the button to the associated thread
        $('.warp' + thread).addClass('harness'+shaft);
        //add the shaft to the thread in the WIF object
        WIF.THREADING[thread] = shaft;
    });
```
		
####4. `.tieUp`: attach harnesses to treadles####

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

####5. `.treadleGrid`: activate pattern / push treadle####

And, the pattern repeats... When we click a button within the `.treadleGrid` (the grid to the right of the `.weaveBox`), all of which have the `.treadlePush` class, we get the classes of `this` element and split them by ' ' (space), then we take the second class (`findTreadle[1]`) and remove all non-numeric characters. Now we know which treadle to add (because the columns in this grid correspond to the treadles). 

Now, we need to know which `.pass***` we're on. Each `.pass***` represents 'passing' the shuttle through the warps. To find the pass, we take the id of `this` element's parent (the parent of `this` is the row, which corresponds with the pass) and remove all non-numeric characters from it. This leaves us with a clean identifier of the `.pass`.

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
####6. Colors####

We're using [spectrum](https://bgrins.github.io/spectrum/) to handle the color picking. It's sweet.

WIF files have COLOR TABLE, WARP COLORS and WEFT COLORS sections. COLOR TABLE is all the colors we're using in this pattern. So, when a user selects a color, it gets added to the table, unless it's already there. Then, when we find out that the color has already been added, or when we add it, we get the index of that element of the array so that we can use it to set a warp or weft thread to a color that has been added to the table. For example, our color table might have something like: 1: '255,255, 0, 0', so in the warp colors section, to set this color to warp1, we'd say: 1:1

The code looks like this (this is for wefts, but warps are the same):
```javascript
 $(".weftBasic").spectrum({
        color: "#f00",
        change: function(color) {
            weftColorChosen = color.toHexString();
            //convert to rgb and get rid of evertyhing but the numbers and some punctuation
            rgbColor =  color.toRgbString().replace(/[^0-9$.,]/g, '');
            //now, when the user clicks the weft color box, it will run the function below and pass our color in hex and rgb string format
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

####7. Save Image####
Users will be happy that they can get pictures of the patterns they create. Now, we get to do some Laravel/PHP stuff. Also, we use [html2canvas](http://html2canvas.hertzen.com/documentation.html), which is pretty sweet. It converts our grids and the weaveBox into a canvas element. We then turn this into image data (base-64 string) with  [toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL). 

Upon clicking this button:

```html
<button class="btn btn-default" onclick="capture();" style="position:fixed; top:25px; right:400px;">Download Image</button>
```

`capture();` happens:

```javascript
function capture() {
 
		 $('.tryBox').html2canvas({
			onrendered: function (canvas) {
			//Set hidden field's value to image data (base-64 string)
			var image = canvas.toDataURL();
			$.post( "/save", { img_val: image} ).done(function( data ) {
			window.location.assign(data);
			  });;
				     
					  }
				 });
		
		};
```

We use the shorthand for `.ajax()` to send this data to this route:

```Route::post('/save', 'HomeController@displayPNG');``` (which probably shouldn't be named displayPNG anymore..)

`displayPNG` is a method within `HomeController`. It looks like this:

```
public function displayPNG()
	{
		//we're going to use this date function to name our file.. cause i think it should be unique
		$name = getdate();
		//the getdate() function returns an array, so I took the one named "0"
		$imagename = $name["0"];
		 
		//Get the base-64 string from data
		$filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);
		 
		//Decode the string
		$unencodedData=base64_decode($filteredData);
		
		//where should we put that picture
		$filePath = './img/patterns/'.$imagename.'.png';
		
		//Save the image
		file_put_contents($filePath, $unencodedData);
		
		//tell the browser its an image
 		$headers = array( 'Content-Type' => 'image/png' );
 		
 		//send back the path so we can send it back to the jQuery $.post within capture()
		return  $filePath;
		}
```

####8. Save WIF####
Now, we get to do something cool with that WIF object we've been building. Print it to a file and allow the user to download it!

When the user submits the form below, we'll call `getWif()`. `getWif()` is responsible for turning our object into JSON which we can use in our Laravel controller.

```html
<form method="POST" action="/download/wif"><input type="hidden" name="WIF" id="wif_val" value="" /><input class="btn btn-default" id="grabWif" type="submit" value="Save WIF" onclick="getWif();"  style="position:fixed; top:25px; right:300px;" /></form>
```

`getWif()` looks like this:

```javascript
function getWif() {
	//turn our WIF object into JSON so PHP can do stuff with it
	var wifDisplay = JSON.stringify(WIF);
	//set the value of this hidden input to our json!
	$('#wif_val').val(wifDisplay);
	}
```

And, then all the good stuff happens. Now we can print the various properties of our WIF from the object. Behold:

```
public function printWIF()
	{
	//get the wif json POST data
	$wif = $_POST['WIF'];
	//decode into php object
	$tempData = json_decode(str_replace("\\", "", $wif), true);
	//make unique filename
	$name = getdate();
	//define file path
	$file = './wif/'.$name["0"].'.wif';
	
	//write [WIF] section
	file_put_contents($file, "[WIF]\n", FILE_APPEND);
	foreach ($tempData["WIF"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [CONTENTS] section
	file_put_contents($file, "[CONTENTS]\n", FILE_APPEND);
	foreach ($tempData["CONTENTS"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [WEAVING] section
	file_put_contents($file, "[WEAVING]\n", FILE_APPEND);
	foreach ($tempData["WEAVING"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [COLOR PALETTE] section
	file_put_contents($file, "[COLOR PALETTE]\n", FILE_APPEND);
	foreach ($tempData["COLOR PALETTE"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [COLOR TABLE] section
	file_put_contents($file, "[COLOR TABLE]\n", FILE_APPEND);
	foreach ($tempData["COLOR TABLE"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [WARP] section
	file_put_contents($file, "[WARP]\n", FILE_APPEND);
	foreach ($tempData["WARP"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [WEFT] section
	file_put_contents($file, "[WEFT]\n", FILE_APPEND);
	foreach ($tempData["WEFT"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [TIEUP] section
	file_put_contents($file, "[TIEUP]\n", FILE_APPEND);
	foreach ($tempData["TIEUP"] as $key => $value) {
		$writeIt = $key.':';
	for($i = 0; $i < count($value);){
		if($i == 0){
			$writeIt .= $value[$i];
		} else {
			$writeIt .= ','.$value[$i];
			}
			$i++;
		}	
		$writeIt .= "\n";
		
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [THREADING] section	
	file_put_contents($file, "[THREADING]\n", FILE_APPEND);
	foreach ($tempData["THREADING"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [TREADLING] section
	file_put_contents($file, "[TREADLING]\n", FILE_APPEND);
	foreach ($tempData["TREADLING"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [WARP COLORS] section
	file_put_contents($file, "[WARP COLORS]\n", FILE_APPEND);
	foreach ($tempData["WARP COLORS"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	//write [WEFT COLORS] section
	file_put_contents($file, "[WEFT COLORS]\n", FILE_APPEND);
	foreach ($tempData["WEFT COLORS"] as $key => $value) {
		$writeIt = $key.':'.$value."\n";
		file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	return Response::download($file);
	}
```

And the user gets a download prompt! 

:]

Thanks for looking at Weavie.


