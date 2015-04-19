var numWarps;
var numWefts; 

$(document).ready(function() {

			
	
	$(".submit").click(function() {
		numWarps = $(".warpNum").val();
		numWefts = $(".weftNum").val();
		alert(numWarps + ' ' + numWefts);
		
		everything(numWarps, numWefts);
	});
});


		

function everything(numWarps, numWefts) {		

	$(".choose").remove();
	
	$(".col-md-12").append('<div class="tryBox"></div>');
	
	//tieUp
	$(".tryBox").append('<div class="tieUp"></div>');
	
	var tieNum = 4;
	var colNum = 4;
	var tieLeft = 0;
	var tieTop = 0;
	
	for(i = 0; i < tieNum; i++) { 
		if(i > 0){
			tieLeft = tieLeft + 25;
			}
		$(".tieUp").append('<div class="tie' + i +'" style="position: absolute; left:' + tieLeft + 'px; width:25px;"></div>');
		tieTop = 0;
		for(c = 0; c < colNum; c++) {
			if(c > 0){
			tieTop = tieTop + 25;
			}
			$('.tie' + i).append('<button id="tRow' + c +'" class="tieButton" style="position: absolute; top:' + tieTop + 'px; width:25px; height:30px;"></button>');
			}
		}
			
		
	//hGrid maker 

		$(".tryBox").append('<div class="hGrid">');
		var left = 0 
		for (i = 0; i < numWarps; i++) { 
	
			//if this is not the first iteration of the loop, add 15.. we want our buttons 15 px wide, 
			//35so we need to space them 15px apart... we use this to set the left property
			if(i > 0){
				left = left + 15
			} 
			$(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0; right:' + left + 'px; height:100%; width:15px;" ><button class="hGridRow1"></button><button class="hGridRow2"></button><button class="hGridRow3"></button><button class="hGridRow4"></button></button>');			
		}
	
		$(".tryBox").append('</div>');
		
	//treadle push grid maker 

		$(".tryBox").append('<div class="treadleGrid">');

		var top = 0
		for (i = 0; i < numWefts; i++) { 
			if(i > 0){
				top = top + 15
			} 
			$(".treadleGrid").append('<div id="t' + i + '" style="position:absolute; right:0; top:' + top + 'px; width:100%; height:15px;" ><button class="treadleGridCol1"></button><button class="treadleGridCol2"></button><button class="treadleGridCol3"></button><button class="treadleGridCol4"></button></button>');			
		}
	
		$(".tryBox").append('</div>');

	//for clicking on the harness grid.

		$(".hGridRow1").click(function(){
			var parent = $(this).parent().attr('id');
		
			$('#' + parent).children().removeClass('activeButton');
			$('#' + parent + ' > .hGridRow1').addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass("harness0");
		});
	
		$(".hGridRow2").click(function(){
			var parent = $(this).parent().attr('id');
		
			$('#' + parent).children().removeClass('activeButton');
			$('#' + parent + ' > .hGridRow2').addClass("activeButton");
			$('.warp' + parent).alterClass("harness*'");
			$('.warp' + parent).addClass('harness1');
		});
	
		$(".hGridRow3").click(function(){
			var parent = $(this).parent().attr('id');
		
			$('#' + parent).children().removeClass('activeButton');
			$('#' + parent + ' > .hGridRow3').addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass('harness2');
		});
	
		$(".hGridRow4").click(function(){
			var parent = $(this).parent().attr('id');
		
			$('#' + parent).children().removeClass('activeButton');
			$('#' + parent + ' > .hGridRow4').addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass('harness3');
		});
	
	//for pumping out the weaveBox

		$(".tryBox").append('<div class="weaveBox"></div>');
	
		//pump out wefts
		$(".tryBox").append('<div class="weftColorGrid"></div>');
		$(".tryBox").append('<div class="pickWeftColorsDisplay" style="position:absolute; top:20%; background:white;  z-index:3; left:40%; height:30px; width:78%;"></div>');
		$(".tryBox").append('<div class="weftColorChoose">Click to set weft color: <input type="text" class="weftBasic"/>');
		weaveBoxTop = 0;
		for (i = 0; i < numWefts; i++) {
		
			if(i > 0){
				var weaveBoxTop = weaveBoxTop + 15;
			}
		
			$(".weaveBox").append('<div class="weft' + i + ' base" style="position:absolute; width:100%; height: 15px; top:' + weaveBoxTop + 'px;"></div>');
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
				$(".weaveBox").append('<div class="warp' + i + ' ' + pass + '" style="position:absolute; top:' + warpPassTop + '; left:' + warpPassLeft + 'px; height:15px; width:15px;" ></div>');			
				}
		}
		warpLeft = 0
		
		
		//for getting the chosen color for easier clicking and choosing
		//warp color picker stuff
		
		$(".tryBox").append('<div class="warpColorGrid"></div>');
		$(".tryBox").append('<div class="warpColorChoose">Click to set warp color: <input type="text" class="basic"/>');
		
		
		for (i = 0; i < numWarps; i++) { 
		if(i > 0){
					warpLeft = warpLeft + 15
				}
			$(".warpColorGrid").append('<button id=' + i + ' class="warpColorButton" style="position:absolute; left:' + warpLeft + 'px; width:15px; height:15px;"></button>');
			
		}	
		
		
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
			var findTreadle = 'treadle' + $(this).parent().attr('class').substr(3);		
			var findHarness = 'harness' + $(this).attr('id').substr(4);
			alert(findTreadle + ' ' + findHarness);
				$('.' + findHarness).addClass(findTreadle);
				$(this).css('background', 'grey');
				
			}, function() {
			var findTreadle = 'treadle' + $(this).parent().attr('class').substr(3);		
			var findHarness = 'harness' + $(this).attr('id').substr(4);
			alert(findTreadle + ' ' + findHarness);
			 $(this).css('background', '');
			 $('.' + findHarness).removeClass(findTreadle);
			});
	
	//mangage the treadling

		$(".treadleGridCol1").click(function(){
			var parent = $(this).parent().attr('id');
			var findWarp = parent.substr(1);
			$('#' + parent).children().removeClass('activeButton');
			$('.pass'+ findWarp).removeClass("above");
			$(this).addClass("activeButton");
			$('.pass' + findWarp + '.treadleOne').addClass("above");
		});
	
		$(".treadleGridCol2").click(function(){
			var parent = $(this).parent().attr('id');
			var findWarp = parent.substr(1);
			$('#' + parent).children().removeClass('activeButton');
			$('.pass'+ findWarp).removeClass("above");
			$(this).addClass("activeButton");
			$('.pass' + findWarp + '.treadleTwo').addClass("above");
		});
	
		$(".treadleGridCol3").click(function(){
			var parent = $(this).parent().attr('id');
					var findWarp = parent.substr(1);
			$('#' + parent).children().removeClass('activeButton');
			$('.pass'+ findWarp).removeClass("above");
			$(this).addClass("activeButton");
			$('.pass' + findWarp + '.treadleThree').addClass("above");
		});
	
		$(".treadleGridCol4").click(function(){
			var parent = $(this).parent().attr('id');
					var findWarp = parent.substr(1);
			$('#' + parent).children().removeClass('activeButton');
			$('.pass'+ findWarp).removeClass("above");
			$(this).addClass("activeButton");
			$('.pass' + findWarp + '.treadleFour').addClass("above");
		});
	}
