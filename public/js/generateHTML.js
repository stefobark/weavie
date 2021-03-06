//we will let the user set these when they first open the page
var numWarps;
var numWefts;
var numTreadles;
var harnessNumber;

//this is for generating a PNG, it creates a canvas element, turns it into png data, sends that
//to laravel /save and then takes them to view the image.. because if we don't redirect
//the browser everything gets disorganized, none of the styling makes any sense. 
//i think this is because everything gets converted to canvas
//in the future, it might make sense to copy the view box, then convert that copy to canvas, so the user
//could stay on the same page and continue to work on the pattern.
function capture() {

    $('.tryBox').html2canvas({
        onrendered: function(canvas) {
            //Set hidden field's value to image data (base-64 string)
            var image = canvas.toDataURL();
            $.post("/save", {
                img_val: image
            }).done(function(data) {
                window.location.assign(data);
            });;

        }
    });

};

//this sets the value of a hidden element on a form that we use to pass the wif object to laravel for generating a wif file
function getWif() {
    var wifDisplay = JSON.stringify(WIF);
    $('#wif_val').val(wifDisplay);
}

//here is the beginning of our wif object, with everything that the user won't set already filled out
var WIF = {
    "WIF": {
        "Version": "1.1",
        "Date": "March 3, 1996",
        "Developers": "Ravi Nielsen, Bob Keates, Rob Sinkler",
        "Source Program": "Weavie",
        "Source Version": "0.01"
    },
    "CONTENTS": {
        "WEAVING": "yes",
        "COLOR PALETTE": "yes",
        "WARP": "yes",
        "WEFT": "yes",
        "TIEUP": "yes",
        "COLOR TABLE": "yes",
        "THREADING": "yes",
        "TREADLING": "yes",
        "WARP COLORS": "yes",
        "WEFT COLORS": "yes"
    },
    "WEAVING": {
        "Shafts": "12",
        "Treadles": "",
        "Rising Shed": "yes",
        "Profile": "no"
    },
    "COLOR PALETTE": {
        "Entries": "",
        "Form": "RGB",
        "Range": "0,255"
    },
    "WARP": {
        "Threads": "",
        "Palette": "yes",
        "Units": "Decimeters",
        "Spacing": "100",
        "Thickness": "80"
    },
    "WEFT": {
        "Threads": "",
        "Palette": "yes",
        "Units": "Decimeters",
        "Spacing": "100",
        "Thickness": "80"
    },
    "TIEUP": {},
    "COLOR TABLE": [],
    "THREADING": {},
    "TREADLING": {},
    "WARP COLORS": {},
    "WEFT COLORS": {}
};

function findFloat() {
	var weftFloatNum = 0;
	var weftCount = 0;
	for(i=0;i<numWefts;i++){
		$('.pass'+i).each(function( index ) {
		  
		  var checkAbove = $( this ).hasClass("above");
		  if(checkAbove == false){
		  	weftCount = weftCount + 1;
		  	} else {
		  		
		  		if(weftCount > weftFloatNum){
		  			weftFloatNum = weftCount;
		  		} 
		  		weftCount = 0;
		  	}
		});	
	}
	var warpFloatNum = 0;
	var warpCount = 0;
	for(i=0;i<numWarps;i++){
		$('.warp'+i).each(function( index ) {
		  
		  var checkAbove = $( this ).hasClass("above");
		  if(checkAbove == true){
		  	warpCount = warpCount + 1;
		  	} else {
		  		
		  		if(warpCount > warpFloatNum){
		  			warpFloatNum = warpCount;
		  		} 
		  		warpCount = 0;
		  	}
		});	
	}
	
	alert('horizontal float num: '+weftFloatNum+' vertical float num: '+warpFloatNum);
}
//now, this is where things actually start to happen
$(document).ready(function() {


//when the user submits the submit button, and sends us the number of threads and treadles...
    $(".submit").click(function() {
        numWarps = $(".warpNum").val();
        numWefts = $(".weftNum").val();
        numTreadles = $(".treadleNum").val();
        harnessNumber = $(".harnessNum").val();

		  // call this function that does 'everything'. send it the user's choice
        everything(numWarps, numWefts, numTreadles);
    });
});

//this is the 'everything' function, that does everything.
function everything(numWarps, numWefts, numTreadles) {

	 //we've got the number of things the users want
    //lets start building our WIF
    WIF.WEAVING.Treadles = numTreadles;

    //use colorEntry to increment everytime a new color is chosen. also have to push this to the WARP and WEFT section
    var colorEntry = 0;
    WIF["COLOR PALETTE"].Entries = "" + colorEntry + "";

    WIF.WARP.Threads = numWarps;
    WIF.WEFT.Threads = numWefts;

	 //here are a bunch of variables we'll use when building boxes and such
    var tieNum = 4;
    var colNum = numTreadles;
    var tieUpHeight = tieNum * 20;
    var tieUpWidth = numTreadles * 20 + 20;
    var weftColorRight = tieUpWidth + 15;
    var weaveBoxRight = tieUpWidth + 80;
    var tieLeft = 0;
    var tieTop = 0;
    var boxHeight = numWefts * 20;
    var boxWidth = numWarps * 20;
    var tryBoxSize = boxWidth + 300;
    var weftTop = 0;
	 var topGridHeight = harnessNumber * 20;
	 var weaveBoxTop = topGridHeight + 80;
	 var treadleTop = topGridHeight + 80;
	 var treadleNumTop = topGridHeight + 55;
    var weaveTop = 0
   

    //get rid of the warp/weft/treadle setting inputs and display the draft
    $(".choose").remove();

    /*
    	THIS IS THE HTML OUTPUT SECTION..
    	AFTER REMOVING .choose, WE JUST APPEND EVERYTHING
    	IT'S GENERATED BASED ON USER INPUT FOR
    	WARP/WEFT/TREADLE NUMBERS
    */
    $("body").append('<div class="borderTryBox"><div class="tryBox" style="width:' + tryBoxSize + 'px;"></div></div>');

    //let the people see the wif
    $("#wifDiv").append('<form method="POST" action="/download/wif"><input type="hidden" name="WIF" id="wif_val" value="" /><input class="btn btn-default" id="grabWif" type="submit" value="Save WIF" onclick="getWif();"  style="position:fixed; top:25px; right:200px;" /></form>');
	$("body").append('<div id="checkFloats" class="btn btn-default" style="position:fixed; top:25px; right:80px;">Check Floats</div>');
	
    //tieUp
    $(".tryBox").append('<div class="tieUp" style="position:absolute; right: 20px; top:0px; height:'+topGridHeight+'px; width:' + tieUpWidth + 'px;"></div>');
	 $(".tryBox").append('<div class="tieUpNum" style="right:30px;"><h1><img src="/img/2.png" style="width:auto; height:20px;"></h1></div>');


    for (i = 0; i < colNum; i++) {
        if (i > 0) {
            tieLeft = tieLeft + 20;
        }
        $(".tieUp").append('<div class="tie' + i + '" style="position: absolute; left:' + tieLeft + 'px; width:20px; height:' + topGridHeight + 'px;"></div>');
        tieTop = 0;
        for (c = 0; c < harnessNumber; c++) {
            if (c > 0) {
                tieTop = tieTop + 20;
            }
            $('.tie' + i).append('<button id="tRow' + c + '" class="tieButton" style="position: absolute; top:' + tieTop + 'px; left:0px; width:20px; height:20px;"></button>');
        }
    }

    //treadle push grid maker 
    $(".tryBox").append('<div class="treadleGrid" style="position:absolute; top:'+treadleTop+'px; right:20px; height:' + boxHeight + 'px; width:' + tieUpWidth + 'px;"></div>');
	$(".tryBox").append('<div class="treadleGridNum" style="position:absolute; top:'+treadleNumTop+'px; right:30px;"><img src="/img/3.png" style="width:auto; height:20px;"></div>');

    for (w = 0; w < numWefts; w++) {
        if (w > 0) {
            weftTop = weftTop + 20;
        }
        $(".treadleGrid").append('<div class="t' + w + '" style="position:absolute; right:0; top:' + weftTop + 'px; width:100%; height:20px;"></div>');
			var treadleGridLeft = 0;
        for (col = 0; col < colNum; col++) {
            if (col > 0) {
                treadleGridLeft = treadleGridLeft + 20;
            }
            var addTreadle = '.t' + w
            $(addTreadle).append('<button class="treadlePush treadleGridCol' + col + '" style="position:absolute; top:0; left:' + treadleGridLeft + '; width:20px; height:100%;" ></button>');
        }
    }

    //for pumping out the weaveBox
    $(".tryBox").append('<div class="weaveBoxBorder" style="width:' + boxWidth + 'px; right:'+weaveBoxRight+'px;"><div id="weaveBox" style=" top:'+weaveBoxTop+'px; bottom: 0px;"></div></div>');

    //pump out wefts
    $(".tryBox").append('<div class="weftColorGrid" style="height:' + boxHeight + 'px; top:'+weaveBoxTop+'px; width:60px; right:'+weftColorRight+'px; display:none;"></div>');
    $(".tryBox").append('<div class="weftColorChoose" style="top:'+topGridHeight+'px;"><div style="text-align:center;">:Weft</div><input type="text" class="weftBasic"/></div>');
   

    for (i = 0; i < numWefts; i++) {

        if (i > 0) {
            var weaveTop = weaveTop + 20;
        }

        $("#weaveBox").append('<div class="weft' + i + ' base" style="position:absolute; width:' + boxWidth + 'px; height: 20px; top:' + weaveTop + 'px; right:0;"></div>');
        $(".weftColorGrid").append('<button id="' + i + '" class="weftColorButton" style="position:absolute;  top:' + weaveTop + 'px; left: 20px; width:20px; height:20px;"></button>');

    }

    //hGrid maker 
    $(".weaveBoxBorder").append('<div class="hGrid" style="width:' + boxWidth + 'px; height:'+topGridHeight+'px;"></div>');
    $(".weaveBoxBorder").append('<div class="hGridNum"><h1><img src="/img/1.png"  style="width:auto; height:20px;"></h1></div>');


    var left = 0
    for (i = 0; i < numWarps; i++) {
        var top = 0;
        //if this is not the first iteration of the loop, add 20.. we want our buttons 20 px wide, 
        //so we need to space them 20px apart... we use this to set the left property
        if (i > 0) {
            left = left + 20
        }
        if (i == 0) {
            left = 1;
        }


        $(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0px; right:' + left + 'px; width:20px; height:'+topGridHeight+'px;"></div>');
        for (h = 0; h < harnessNumber; h++) {
            $('#' + i).append('<button class="harnessButton hGridRow' + h + '" style="position:absolute; top:'+top+'px; left:0px; width: 20px; height:20px;"></button>');
            top = top + 20;
        }
    }

    $(".tryBox").append('</div>');
	var setColorHeight = topGridHeight + 10;

    warpPassTop = 0

    //pump out warps, each pass on new line 20px down
    for (weft = 0; weft < numWefts; weft++) {
        warpPassLeft = 0
        var pass = 'pass' + weft;
        if (weft > 0) {
            warpPassTop = warpPassTop + 20
        }
        for (i = 0; i < numWarps; i++) {
            if (i > 0) {
                warpPassLeft = warpPassLeft + 20
            }
            $("#weaveBox").append('<div class="weaveView warp' + i + ' ' + pass + '" style="position:absolute; top:' + warpPassTop + '; right:' + warpPassLeft + 'px; height:20px; width:20px;" ></div>');
        }
    }
	warpColorTop = topGridHeight + 20;
    $(".weaveBoxBorder").append('<div class="warpColorGrid" style="z-index:4; top:'+warpColorTop+'px; display:none;"></div>');
    $(".tryBox").append('<div class="warpColorChoose" style="top:'+topGridHeight+'px;"><div style="text-align:center;">:Warp</div><input type="text" class="basic"/></div>');
		$(".tryBox").append('<div class="setColor" style="top:'+setColorHeight+'px; "><img src="/img/setColors.png" style=" height:40px; width:auto; z-index:10;"></div>');

    //warp color picker stuff



    warpLeft = 0
    for (i = 0; i < numWarps; i++) {
        if (i > 0) {
            warpLeft = warpLeft + 20
        }
        $(".warpColorGrid").append('<button id=' + i + ' class="warpColorButton" style="position:absolute; right:' + warpLeft + 'px; width:20px; height:20px;"></button>');

    }

    /*
    	BELOW THIS 
    	IS ALL THE CLICK MANAGEMENT STUFF
    	...NO MORE APPENDING HTML
    */

 	
	
    //make the treadle grid pusher work
    $(".treadlePush").click(function() {
        var findTreadle = $(this).attr('class').split(" ");
        var findTreadle = findTreadle[1].replace(/\D/g, '');
        var findPass = $(this).parent().attr('class').replace(/\D/g, '');
        $(this).css("background", "grey");
        $(this).siblings().css("background", "");
        $('.pass' + findPass).removeClass("above");
        var findThis = '.treadle' + findTreadle + '.pass' + findPass;
        $(findThis).addClass("above");
        WIF.TREADLING[findPass] = findTreadle;

    });

    //for clicking on the harness grid.

    $(".harnessButton").click(function() {
        var thread = $(this).parent().attr('id');
        var shaft = $(this).attr('class').split(" ");
        var shaft = shaft[1].replace(/\D/g, '');

        //manage hgrid buttons
        $(this).siblings().removeClass('activeButton');
        $(this).addClass("activeButton");

        //unselect tieup buttons, cause our harnesses changed

        for (col = 0; col < colNum; col++) {

            for (t = 0; t < harnessNumber; t++) {
                if (t == shaft) {
                    $('.tie' + col + ' #tRow' + shaft).css('background', '');

                }
            }
        }
        $('.warp' + thread).alterClass("harness*");
        $('.warp' + thread).removeClass("above");
        $('.warp' + thread).alterClass("treadle*");
        $('.warp' + thread).addClass('harness' + shaft);
        WIF.THREADING[thread] = shaft;
    });

    //manage the tie-up grid

    $(".tieButton").funcToggle('click', function() {
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
        var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
        $('.treadleGridCol' + treadle).css('background', '');
        $('.harness' + harness).removeClass('.treadle' + treadle);

        //if we haven't set up this treadle yet...
        if (WIF.TIEUP[treadle] == null) {
            WIF.TIEUP[treadle] = [harness];
        }
        //if we've already added some harnesses to this treadle
        else {
            WIF.TIEUP[treadle].push(harness);
        }

        $('.' + findHarness).addClass(findTreadle);
        $(this).css('background', 'grey');

    }, function() {
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
        var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
        $('.treadleGridCol' + treadle).css('background', '');
        $('.harness' + harness).removeClass('.treadle' + treadle);
        //find that harness number in the array contained within the object, and get rid of it.
        var index = WIF.TIEUP[treadle].indexOf(harness);

        if (index > -1) {
            WIF.TIEUP[treadle].splice(index, 1);
        }
        $(this).css('background', '');
        $('.' + findHarness).removeClass(findTreadle);
    });

    //color picking


    $(".weftBasic").spectrum({
        color: "#fff ",
        change: function(color) {
            weftColorChosen = color.toHexString();
            //increment this to keep track of colors 
            colorEntry++;
            WIF["COLOR PALETTE"].Entries = colorEntry;
            rgbColor = color.toRgbString().replace(/[^0-9$.,]/g, '');
            setWeftColor(weftColorChosen, rgbColor);
            $(".weftColorGrid").css("display", "block");
        }
    });


    function setWeftColor(weftColorChosen, rgbColor) {
        $(".weftColorButton").click(function() {

            var weftID = ($(this).attr('id'));
            $(this).css("background", weftColorChosen);
            $('.weft' + weftID).css("background", weftColorChosen);
            //if we haven't already set the color for this weft
            colorTableIndex = $.inArray(rgbColor, WIF["COLOR TABLE"]);
            if (colorTableIndex == -1) {

                WIF["COLOR TABLE"].push(rgbColor);
                weftColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
                WIF["WEFT COLORS"][weftID] = weftColorIndex;
            } else {
                warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);;
                WIF["WEFT COLORS"][weftID] = weftColorIndex;



            }

        });
    }

    $(".basic").spectrum({
        color: "#fff ",
        change: function(color) {
            colorEntry++;
            WIF["COLOR PALETTE"].Entries = colorEntry;
            var warpColorChosen = color.toHexString();
            var rgbColor = color.toRgbString().replace(/[^0-9$.,]/g, '');
            setWarpColor(warpColorChosen, rgbColor);
            $(".warpColorGrid").css("display", "block");


        }
    });


    function setWarpColor(warpColorChosen, rgbColor) {
        $(".warpColorButton").click(function() {


            var warpID = ($(this).attr('id'));
            $('.warp' + warpID).css("background", warpColorChosen);
            $(this).css("background", warpColorChosen);
            //if we haven't already set the color in the table, add it to the table

            colorTableIndex = $.inArray(rgbColor, WIF["COLOR TABLE"]);
            if (colorTableIndex == -1) {

                WIF["COLOR TABLE"].push(rgbColor);
                warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
                WIF["WARP COLORS"][warpID] = warpColorIndex;

            } else {
                warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
                WIF["WARP COLORS"][warpID] = warpColorIndex;

            }

        });
    }
	
	
    $('disableIt').submit(function() {
        alert('I do something before the post');
        return true;
    });
    
    $("#checkFloats").click(function() {
	 	findFloat();
	 });
	 
	
    $('body').append('<button class="btn btn-danger download" onclick="capture();" style="position:fixed; top:25px; right:300px;">Download Image</button>');
    $('.download').hover(function() {
   		$('#downloadWarning').css('display','block');
   		});
    $('body').append('<div id="downloadWarning"  style="position:fixed; top:22px; display:none; right:430px;" onhover><img src="/img/downloadWarning.png" style="height:40px; width:auto;"></div>');


}
