var numWarps;
var numWefts;
var numTreadles;

var WIF = {
    "WIF": {
        "Version": "1.1",
        "Date": "9/11/2014",
        "Developers": "wif@handweaving.net",
        "Source Program": "Handweaving.net Draft Library",
        "Source Version": "3.0"
    },
    "CONTENTS": {
        "COLOR PALETTE": "yes",
        "WEAVING": "yes",
        "WARP": "yes",
        "WEFT": "yes",
        "TIEUP": "yes",
        "COLOR TABLE": "yes",
        "THREADING": "yes",
        "WARP COLORS": "yes",
        "TREADLING": "yes",
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
    "COLOR TABLE": [],
    "WARP": {
        "Threads": "",
        "Units": "Centimeters",
        "Spacing": "0.0185",
        "Thickness": "0.0213"
    },
    "WEFT": {
        "Threads": "",
        "Units": "Centimeters",
        "Spacing": "0.0185",
        "Thickness": "0.0213"
    },
    "TIEUP": {},
    "THREADING": {},
    "TREADLING": { 
        },
    "WARP COLORS": {},
    "WEFT COLORS": {}
};

$(document).ready(function() {



    $(".submit").click(function() {
        numWarps = $(".warpNum").val();
        numWefts = $(".weftNum").val();
        numTreadles = $(".treadleNum").val();


        everything(numWarps, numWefts, numTreadles);
    });
});




function everything(numWarps, numWefts, numTreadles) {

 //lets start building our WIF
 WIF.WEAVING.Treadles = numTreadles;
 
 //add up warps and wefts so we could potentially have a unique color for each thread
 colorEntry = Number(numWarps) + Number(numWefts);
 WIF["COLOR PALETTE"].Entries = colorEntry;
 
 WIF.WARP.Threads = numWarps;
 WIF.WEFT.Threads = numWefts;
 
    if (numTreadles > 14) {
        alert("You don't need that many treadles. You only have 4 harnesses... 14 is the maximum number of possible combinations.");
        numTreadles = 14;
    }
    
    var tieNum = 4;
    var colNum = numTreadles;
    var tieUpHeight = tieNum * 15;
    var tieUpWidth = numTreadles * 15 + 20;
    var tieLeft = 0;
    var tieTop = 0;
    var boxHeight = numWefts * 15;
    var boxWidth = numWarps * 15;
    var tryBoxSize = boxWidth + 300;
    var weftTop = 0;

	//get rid of the warp/weft/treadle setting inputs and display the draft
	
    $(".choose").remove();

/*
	THIS IS THE HTML OUTPUT SECTION.. BECAUSE THE PAGE STARTS BLANK
	AND WE JUST APPEND EVERYTHING
	IT'S GENERATED BASED ON USER INPUT FOR
	WARP/WEFT/TREADLE NUMBERS
*/

    $(".col-md-12").append('<div class="borderTryBox"><div class="tryBox" style="width:'+tryBoxSize+'px;"></div></div>');

    //tieUp
    $(".tryBox").append('<div class="tieUp" style="position:absolute; right: 20px; top:0px; height:77px; width:' + tieUpWidth + 'px;"></div>');


    for (i = 0; i < colNum; i++) {
        if (i > 0) {
            tieLeft = tieLeft + 15;
        }
        $(".tieUp").append('<div class="tie' + i + '" style="position: absolute; left:' + tieLeft + 'px; width:15px; height:' + tieUpHeight + 'px;"></div>');
        tieTop = 0;
        for (c = 0; c < tieNum; c++) {
            if (c > 0) {
                tieTop = tieTop + 15;
            }
            $('.tie' + i).append('<button id="tRow' + c + '" class="tieButton" style="position: absolute; top:' + tieTop + 'px; width:15px; height:15px;"></button>');
        }
    }


    
    //treadle push grid maker 

    $(".tryBox").append('<div class="treadleGrid" style="position:absolute; top:120px; right: 20px; height:' + boxHeight + 'px; width:' + tieUpWidth + 'px;"></div>');

	
    var weavetop = 0

    for (w = 0; w < numWefts; w++) {
        if (w > 0) {
            weftTop = weftTop + 15
        }
        $(".treadleGrid").append('<div class="t' + w + '" style="position:absolute; right:0; top:' + weftTop + 'px; width:100%; height:15px;"></div>');

        var treadleGridLeft = 0;
        for (col = 0; col < colNum; col++) {
            if (col > 0) {
                treadleGridLeft = treadleGridLeft + 15
            }
            var addTreadle = '.t' + w
            $(addTreadle).append('<button class="treadlePush treadleGridCol' + col + '" style="position:absolute; top:0; left:' + treadleGridLeft + '; width:15px; height:100%;" ></button>');
        }
    }

    //for pumping out the weaveBox

    $(".tryBox").append('<div class="weaveBoxBorder" style="width:'+boxWidth+'px;"><div class="weaveBox" ></div></div>');

    //pump out wefts
    $(".tryBox").append('<div class="weftColorGrid" style="height:' + boxHeight + 'px;"></div>');
    $(".tryBox").append('<div class="weftColorChoose">Weft: <input type="text" class="weftBasic"/></div>');
    weaveBoxTop = 0;

    for (i = 0; i < numWefts; i++) {

        if (i > 0) {
            var weaveBoxTop = weaveBoxTop + 15;
        }

        $(".weaveBox").append('<div class="weft' + i + ' base" style="position:absolute; width:' + boxWidth + 'px; height: 15px; top:' + weaveBoxTop + 'px; right:0;"></div>');
        $(".weftColorGrid").append('<button id="' + i + '" class="weftColorButton" style="position:absolute;  top:' + weaveBoxTop + 'px; width:15px; height:15px;"></button>');

    }

//hGrid maker 

    $(".weaveBoxBorder").append('<div class="hGrid" style="width:' + boxWidth +'px;"></div>');

    var left = 0
    for (i = 0; i < numWarps; i++) {
        var top = 0;
        //if this is not the first iteration of the loop, add 15.. we want our buttons 15 px wide, 
        //35so we need to space them 15px apart... we use this to set the left property
        if (i > 0) {
            left = left + 15
        }
        if (i == 0) {
            left = 1;
            }
        for (x = 0; x < tieNum; x++) {
            if (x > 0) {
                top = top + 15
            }

            $(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0px; right:' + left + 'px; height:100%; width:15px;"><button class="hGridRow0"></button><button class="hGridRow1"></button><button class="hGridRow2" ></button><button class="hGridRow3"></button></div>');
        }
    }

    $(".tryBox").append('</div>');


    warpPassTop = 0

    //pump out warps, each pass on new line 15px down
    for (weft = 0; weft < numWefts; weft++) {
        warpPassLeft = 0
        var pass = 'pass' + weft;
        if (weft > 0) {
            warpPassTop = warpPassTop + 15
        }
        for (i = 0; i < numWarps; i++) {
            if (i > 0) {
                warpPassLeft = warpPassLeft + 15
            }
            $(".weaveBox").append('<div class="warp' + i + ' ' + pass + '" style="position:absolute; top:' + warpPassTop + '; right:' + warpPassLeft + 'px; height:15px; width:15px;" ></div>');
        }
    }
    
    $(".weaveBoxBorder").append('<div class="warpColorGrid" style="z-index:4;"></div>');
    $(".tryBox").append('<div class="warpColorChoose">Warp: <input type="text" class="basic"/></div>');

    //warp color picker stuff

    

    warpLeft = 0
    for (i = 0; i < numWarps; i++) {
        if (i > 0) {
            warpLeft = warpLeft + 15
        }
        $(".warpColorGrid").append('<button id=' + i + ' class="warpColorButton" style="position:absolute; right:' + warpLeft + 'px; width:15px; height:15px;"></button>');

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
 console.log(WIF.TREADLING);
    });

    //for clicking on the harness grid.

    $(".hGridRow0").click(function() {
        var thread = $(this).parent().attr('id');
        var shaft = 3;
        $(this).siblings().removeClass('activeButton');
        $(this).addClass("activeButton");
        $('.warp' + thread).alterClass("harness*");
        $('.warp' + thread).addClass("harness3");
        WIF.THREADING[thread] = shaft;
        console.log(WIF.THREADING);
    });

    $(".hGridRow1").click(function() {
        var thread = $(this).parent().attr('id');
        var shaft = 2;
        $(this).siblings().removeClass('activeButton');
        $(this).addClass("activeButton");
        $('.warp' + thread).alterClass("harness*'");
        $('.warp' + thread).addClass('harness2');
        WIF.THREADING[thread] = shaft;
        console.log(WIF.THREADING);
    });

    $(".hGridRow2").click(function() {
        var thread = $(this).parent().attr('id');
        var shaft = 1;
        $(this).siblings().removeClass('activeButton');
        $(this).addClass("activeButton");
        $('.warp' + thread).alterClass("harness*'");
        $('.warp' + thread).addClass('harness1');
        WIF.THREADING[thread] = shaft;
        console.log(WIF.THREADING);
    });

    $(".hGridRow3").click(function() {
        var thread = $(this).parent().attr('id');
        var shaft = 3;
        $(this).siblings().removeClass('activeButton');
        $(this).addClass("activeButton");
        $('.warp' + thread).alterClass("harness*'");
        $('.warp' + thread).addClass('harness0');
        WIF.THREADING[thread] = shaft;
        console.log(WIF.THREADING);
    });

    //manage the tie-up grid

    $(".tieButton").funcToggle('click', function() {
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
        var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
        
        //if we haven't set up this treadle yet...
        if( WIF.TIEUP[treadle] == null ){
             WIF.TIEUP[treadle]= [harness];
        } 
        //if we've already added some harnesses to this treadle
        else {
             WIF.TIEUP[treadle].push(harness);
             }
       
        $('.' + findHarness).addClass(findTreadle);
        $(this).css('background', 'grey');
         console.log(WIF.TIEUP);

    }, function() {
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
		  var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
		  
		  //find that harness number in the array contained within the object, and get rid of it.
		  var index = WIF.TIEUP[treadle].indexOf(harness);
		  
		  if (index > -1) {
   		 WIF.TIEUP[treadle].splice(index, 1);
			}
			console.log(WIF);
        $(this).css('background', '');
        $('.' + findHarness).removeClass(findTreadle);
    });

    //color picking
    
    //for default colors.. so users can just click buttons and give color to warps and wefts
    var warpColorChosen = "#777";
    var weftColorChosen = "#333";
    
    
    
    $(".weftBasic").spectrum({
        color: "#f00",
        change: function(color) {
            weftColorChosen = color.toHexString();
            rgbColor =  color.toRgbString().replace(/[^0-9$.,]/g, '');
            setWeftColor(weftColorChosen, rgbColor);
        }
    });
    

    function setWeftColor(weftColorChosen, rgbColor) {
        $(".weftColorButton").click(function() {

            var weftID = ($(this).attr('id'));
            $('.weft' + weftID).css("background", weftColorChosen);
            //if we haven't already set the color for this weft
           colorTableIndex = $.inArray(rgbColor, WIF["COLOR TABLE"]);
            if(colorTableIndex == -1){
            	
           		WIF["COLOR TABLE"].push(rgbColor);
           		weftColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           		WIF["WEFT COLORS"][weftID] = weftColorIndex;
           		console.log(WIF)
           } else {
           warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           WIF["WEFT COLORS"][weftID] = weftColorIndex;
           console.log(WIF);
           
console.log(WIF["COLOR TABLE"]);

         }
            	
        });
    }

    $(".basic").spectrum({
        color: "#f00",
        change: function(color) {
            var warpColorChosen = color.toHexString();
           var rgbColor =  color.toRgbString().replace(/[^0-9$.,]/g, '');
            setWarpColor(warpColorChosen, rgbColor);
        }
    });

    function setWarpColor(warpColorChosen, rgbColor) {
        $(".warpColorButton").click(function() {
            
            var warpID = ($(this).attr('id'));
            $('.warp' + warpID).css("background", warpColorChosen);
            //if we haven't already set the color in the table, add it to the table
           colorTableIndex = $.inArray(rgbColor, WIF["COLOR TABLE"]);
            if(colorTableIndex == -1){
            	
           		WIF["COLOR TABLE"].push(rgbColor);
           		warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           		WIF["WARP COLORS"][warpID] = warpColorIndex;
           		console.log(WIF)
           } else {
           warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           WIF["WARP COLORS"][warpID] = warpColorIndex;
           console.log(WIF);
           		}
           
console.log(WIF["COLOR TABLE"]);

         ;
        });
    }
}
