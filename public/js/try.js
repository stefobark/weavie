var numWarps;
var numWefts;
var numTreadles;

        
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

	
  

	   
function getWif() {
	var wifDisplay = JSON.stringify(WIF);
	$('#wif_val').val(wifDisplay);
	}

		
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
        "Palette" : "yes", 
        "Units": "Decimeters",
        "Spacing": "100",
        "Thickness": "80"
    },
    "WEFT": {
        "Threads": "",
        "Palette" : "yes",
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
 var  colorEntry =  0;
 WIF["COLOR PALETTE"].Entries = ""+colorEntry+"";
 
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
    var harnessNumber = 4;

	//get rid of the warp/weft/treadle setting inputs and display the draft
	
    $(".choose").remove();

/*
	THIS IS THE HTML OUTPUT SECTION.. BECAUSE THE PAGE STARTS BLANK
	AND WE JUST APPEND EVERYTHING
	IT'S GENERATED BASED ON USER INPUT FOR
	WARP/WEFT/TREADLE NUMBERS
*/

    $(".col-md-12").append('<div class="borderTryBox"><div class="tryBox" style="width:'+tryBoxSize+'px;"></div></div>');

	//let the people see the wif
	 $("#wifDiv").append('<form method="POST" action="/download/wif"><input type="hidden" name="WIF" id="wif_val" value="" /><input class="btn btn-default" id="grabWif" type="submit" value="Save WIF" onclick="getWif();"  style="position:fixed; top:25px; right:300px;" /></form>');

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

    $(".tryBox").append('<div class="weaveBoxBorder" style="width:'+boxWidth+'px;"><div id="weaveBox" ></div></div>');

    //pump out wefts
    $(".tryBox").append('<div class="weftColorGrid" style="height:' + boxHeight + 'px; display:none;"></div>');
    $(".tryBox").append('<div class="weftColorChoose"><div style="text-align:center;">:Weft</div><input type="text" class="weftBasic"/></div>');
    weaveBoxTop = 0;

    for (i = 0; i < numWefts; i++) {

        if (i > 0) {
            var weaveBoxTop = weaveBoxTop + 15;
        }

        $("#weaveBox").append('<div class="weft' + i + ' base" style="position:absolute; width:' + boxWidth + 'px; height: 15px; top:' + weaveBoxTop + 'px; right:0;"></div>');
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
        

            $(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0px; right:' + left + 'px; height:100%; width:15px;"></div>');
            for (h = 0; h < harnessNumber; h++){
            	$('#'+i).append('<button class="harnessButton hGridRow'+h+'"></button>');
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
            $("#weaveBox").append('<div class="warp' + i + ' ' + pass + '" style="position:absolute; top:' + warpPassTop + '; right:' + warpPassLeft + 'px; height:15px; width:15px;" ></div>');
        }
    }
    
    $(".weaveBoxBorder").append('<div class="warpColorGrid" style="z-index:4; display:none;"></div>');
    $(".tryBox").append('<div class="warpColorChoose"><div style="text-align:center;">:Warp</div><input type="text" class="basic"/></div>');

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
        
        for(col = 0; col < colNum; col++){
        		
		     	for(t = 0; t < harnessNumber; t++){
				  if(t == shaft){
				 		 $('.tie'+col+' #tRow'+shaft).css('background', '');
				 		 
				 	}
		    	}
		   }
        $('.warp' + thread).alterClass("harness*");
        $('.warp' + thread).removeClass("above");
        $('.warp' + thread).alterClass("treadle*");
        $('.warp' + thread).addClass('harness'+shaft);
        WIF.THREADING[thread] = shaft;
    });
    
    //manage the tie-up grid

    $(".tieButton").funcToggle('click', function() {
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
        var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
        $('.treadleGridCol'+treadle).css('background', '');
        $('.harness'+harness).removeClass('.treadle'+treadle);
       
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

    }, function() {
        var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g, '');
        var findHarness = 'harness' + $(this).attr('id').replace(/\D/g, '');
		  var treadle = $(this).parent().attr('class').replace(/\D/g, '');
        var harness = $(this).attr('id').replace(/\D/g, '');
		  $('.treadleGridCol'+treadle).css('background', '');
		   $('.harness'+harness).removeClass('.treadle'+treadle);
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
            colorEntry++;
             WIF["COLOR PALETTE"].Entries = ""+colorEntry+"";
            rgbColor =  color.toRgbString().replace(/[^0-9$.,]/g, '');
            setWeftColor(weftColorChosen, rgbColor);
            $(".weftColorGrid").css("display","block");
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
         WIF["COLOR PALETTE"].Entries = ""+colorEntry+"";
            var warpColorChosen = color.toHexString();
           var rgbColor =  color.toRgbString().replace(/[^0-9$.,]/g, '');
            setWarpColor(warpColorChosen, rgbColor);
            $(".warpColorGrid").css("display","block");
				
            
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
           		
           } else {
           warpColorIndex = WIF["COLOR TABLE"].indexOf(rgbColor);
           WIF["WARP COLORS"][warpID] = warpColorIndex;
           
           		}
           	
        });
    }
    
$('disableIt').submit(function(){
    alert('I do something before the post');
    return true;
});
		
		    $('body').append('<button class="btn btn-default" onclick="capture();" style="position:fixed; top:25px; right:400px;">Download Image</button>');

}
