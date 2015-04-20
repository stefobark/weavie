var numWarps;
var numWefts; 

$(document).ready(function() {

			
	
	$(".submit").click(function() {
		numWarps = $(".warpNum").val();
		numWefts = $(".weftNum").val();

		
		everything(numWarps, numWefts);
	});
});


		

function everything(numWarps, numWefts) {		

	
	var tieNum = 4;
	var colNum = 4;
	var tieLeft = 0;
	var tieTop = 0;
	var boxHeight = numWefts * 15;
	var boxWidth = numWarps * 15;

	$(".choose").remove();
	
	$(".col-md-12").append('<div class="borderTryBox"><div class="tryBox"></div></div>');
	
	//tieUp
	$(".tryBox").append('<div class="tieUp" style="position:absolute; right: 270px; top:0px; height:'+boxHeight+';"></div>');
	
	
	for(i = 0; i < tieNum; i++) { 
		if(i > 0){
			tieLeft = tieLeft + 25;
			}
		$(".tieUp").append('<div class="tie' + i +'" style="position: absolute; left:' + tieLeft + 'px; width:25px; height:100%"></div>');
		tieTop = 0;
		for(c = 0; c < colNum; c++) {
			if(c > 0){
			tieTop = tieTop + 25;
			}
			$('.tie' + i).append('<button id="tRow' + c +'" class="tieButton" style="position: absolute; top:' + tieTop + 'px; width:100%; height:25px;"></button>');
			}
		}
			
		
	//hGrid maker 
		if (numWefts < 50){
			
			$(".tryBox").append('<div class="hGrid"></div>');
			} 
		if (numWefts > 50){
			$(".hGridScrollWrap").append('<div class="hGrid" style="overflow:auto; direction: rtl; "></div>');
		}
		var left = 0 
		for (i = 0; i < numWarps; i++) { 
			var top = 0;
			//if this is not the first iteration of the loop, add 15.. we want our buttons 15 px wide, 
			//35so we need to space them 15px apart... we use this to set the left property
			if(i > 0){
				left = left + 15
			} 
			for (x = 0; x < tieNum; x++) { 
				if(x > 0){
				top = top + 15
			} 
			
			$(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0px; right:' + left + 'px; height:100%; width:15px;"><button class="hGridRow0" style="position:absolute; top:' + top + 'px; height:15px"></button><button class="hGridRow1" style="position:absolute; top:' + top + 'px; height:15px"></button><button class="hGridRow2" style="position:absolute; top:' + top + 'px; height:15px"></button><button class="hGridRow3" style="position:absolute; top:' + top + 'px; height:15px"></button></div>');			
			}
		}
	
		$(".tryBox").append('</div>');
		
	//treadle push grid maker 

		$(".tryBox").append('<div class="treadleGrid"></div>');
		
		
		var top = 0
		
		for (i = 0; i < numWefts; i++) { 
			if(i > 0){
				top = top + 15
			} 
			$(".treadleGrid").append('<div class="t' + i + '" style="position:absolute; right:0; top:' + top + 'px; width:100%; height:15px;"></div>');
			
			var treadleGridLeft = 0;
			for(col = 0; col < colNum; col++){
				if(col > 0){
					 treadleGridLeft = treadleGridLeft + 25
				}
				var addTreadle = '.t'+i
				$(addTreadle).append('<button class="treadlePush treadleGridCol' + col +'" style="position:absolute; top:0; left:' + treadleGridLeft+'; width:25px; height:100%;" ></button>');	
			}		
		}
		
	//make the treadle grid pusher work
		$(".treadlePush").click(function(){
			var findTreadle = $(this).attr('class').split(" ");
			var findTreadle = findTreadle[1].replace(/\D/g,'');
			var findPass = $(this).parent().attr('class').replace(/\D/g,'');
			$(this).css("background", "grey");
			$(this).siblings().css("background", "");
			$('.pass'+ findPass).removeClass("above");
			var findThis = '.treadle' + findTreadle + '.pass'+ findPass;
			$(findThis).addClass("above");
			
			});

	//for clicking on the harness grid.

		$(".hGridRow0").click(function(){
			var parent = $(this).parent().attr('id');
		
			$(this).siblings().removeClass('activeButton');
			$(this).addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass("harness0");
		});
	
		$(".hGridRow1").click(function(){
			var parent = $(this).parent().attr('id');
		
			$(this).siblings().removeClass('activeButton');
			$(this).addClass("activeButton");
			$('.warp' + parent).alterClass("harness*'");
			$('.warp' + parent).addClass('harness1');
		});
	
		$(".hGridRow2").click(function(){
			var parent = $(this).parent().attr('id');
		
			$(this).siblings().removeClass('activeButton');
			$(this).addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass('harness2');
		});
	
		$(".hGridRow3").click(function(){
			var parent = $(this).parent().attr('id');
		
			$(this).siblings().removeClass('activeButton');
			$(this).addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass('harness3');
		});
	
	//for pumping out the weaveBox
	
		$(".tryBox").append('<div class="weaveBox" style="height:' + boxHeight +'px; width:'+ boxWidth +'"></div>');
	
		//pump out wefts
		$(".tryBox").append('<div class="weftColorGrid"></div>');

		$(".tryBox").append('<div class="weftColorChoose">Weft color: <input type="text" class="weftBasic"/>');
		weaveBoxTop = 0;

		for (i = 0; i < numWefts; i++) {
		
			if(i > 0){
				var weaveBoxTop = weaveBoxTop + 15;
			}
		
			$(".weaveBox").append('<div class="weft' + i + ' base" style="position:absolute; width:' + boxHeight + 'px; height: 15px; top:' + weaveBoxTop + 'px; right:0;"></div>');
			$(".weftColorGrid").append('<button id="'+ i + '" class="weftColorButton" style="position:absolute;  top:' + weaveBoxTop + 'px; width:15px; height:15px;"></button>');

		}
		
		//color picking wefts
		$(".weftBasic").spectrum({
   		 color: "#f00",
    		change: function(color) {
    			var weftColorChosen = color.toHexString();
				setWeftColor(weftColorChosen);
			 }
		});
		
		function setWeftColor(weftColorChosen) {
		$(".weftColorButton").click(function(){
				var weftID = ($(this).attr('id'));
				 $('.weft' + weftID).css("background", weftColorChosen);
				 });
		}
		
		warpPassTop = 0
	
		//pump out warps, each pass on new line 15px down
		for (weft = 0; weft < numWefts; weft++) { 
			warpPassLeft = 0
			var pass = 'pass' + weft;
			if(weft > 0){
					warpPassTop = warpPassTop + 15
				}
			for (i = 0; i < numWarps; i++) { 
				if(i > 0){
					warpPassLeft = warpPassLeft + 15
				}
				$(".weaveBox").append('<div class="warp' + i + ' ' + pass + '" style="position:absolute; top:' + warpPassTop + '; right:' + warpPassLeft + 'px; height:15px; width:15px;" ></div>');			
				}
		}
		warpLeft = 0
		
		
		//for getting the chosen color for easier clicking and choosing
		//warp color picker stuff
		
		$(".tryBox").append('<div class="warpColorGrid"></div>');
		$(".tryBox").append('<div class="warpColorChoose">Warp color: <input type="text" class="basic"/>');
		
		
		for (i = 0; i < numWarps; i++) { 
		if(i > 0){
					warpLeft = warpLeft + 15
				}
			$(".warpColorGrid").append('<button id=' + i + ' class="warpColorButton" style="position:absolute; right:' + warpLeft + 'px; width:15px; height:15px;"></button>');
			
		}	
		
		var warpColorChosen = "#777";
		var weftColorChosen = "#333";
		setWarpColor(warpColorChosen);
		setWeftColor(weftColorChosen);
		
		$(".basic").spectrum({
   		 color: "#f00",
    		change: function(color) {
    			var warpColorChosen = color.toHexString();
				setWarpColor(warpColorChosen);
			 }
		});
		
		function setWarpColor(warpColorChosen) {
		$(".warpColorButton").click(function(){
				var warpID = ($(this).attr('id'));
				 $('.warp' + warpID).css("background", warpColorChosen);
				 });
		}
		$(".tryBox").append('</div>');
	
	
		$(".tryBox").append('</div>');



		//manage the tie-up grid
		
		$(".tieButton").funcToggle('click', function() {
			var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g,'');		
			var findHarness = 'harness' + $(this).attr('id').replace(/\D/g,'');;
			
				$('.' + findHarness).addClass(findTreadle);
				$(this).css('background', 'grey');
				
			}, function() {
			var findTreadle = 'treadle' + $(this).parent().attr('class').replace(/\D/g,'');;		
			var findHarness = 'harness' + $(this).attr('id').replace(/\D/g,'');;
			
			 $(this).css('background', '');
			 $('.' + findHarness).removeClass(findTreadle);
			});
	}
