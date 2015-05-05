function act() {
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

