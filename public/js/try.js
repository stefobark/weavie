
$(document).ready(function() {

		var numWarps = 70
		var numWefts = 70
		
	//hGrid maker 

		$(".tryBox").append('<div class="hGrid">');
		var left = 0 
		for (i = 0; i < numWarps; i++) { 
	
			//if this is not the first iteration of the loop, add 15.. we want our buttons 15 px wide, 
			//so we need to space them 15px apart... we use this to set the left property
			if(i > 0){
				left = left + 15
			} 
			$(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0; left:' + left + 'px; height:100%; width:15px;" ><button class="hGridRow1"></button><button class="hGridRow2"></button><button class="hGridRow3"></button><button class="hGridRow4"></button></button>');			
		}
	
		$(".tryBox").append('</div>');
	
	//treadle push grid maker 

		$(".tryBox").append('<div class="treadleGrid">');

		var top = 0
		for (i = 0; i < numWarps; i++) { 
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
			$('.warp' + parent).addClass("harnessOne");
		});
	
		$(".hGridRow2").click(function(){
			var parent = $(this).parent().attr('id');
		
			$('#' + parent).children().removeClass('activeButton');
			$('#' + parent + ' > .hGridRow2').addClass("activeButton");
			$('.warp' + parent).alterClass("harness*'");
			$('.warp' + parent).addClass('harnessTwo');
		});
	
		$(".hGridRow3").click(function(){
			var parent = $(this).parent().attr('id');
		
			$('#' + parent).children().removeClass('activeButton');
			$('#' + parent + ' > .hGridRow3').addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass('harnessThree');
		});
	
		$(".hGridRow4").click(function(){
			var parent = $(this).parent().attr('id');
		
			$('#' + parent).children().removeClass('activeButton');
			$('#' + parent + ' > .hGridRow4').addClass("activeButton");
			$('.warp' + parent).alterClass("harness*");
			$('.warp' + parent).addClass('harnessFour');
		});
	
	//for pumping out the weaveBox

		$(".tryBox").append('<div class="weaveBox"></div>');
	
		//pump out wefts
		$(".tryBox").append('<div class="weftColorGrid"></div>');
		$(".tryBox").append('<div class="pickWeftColorsDisplay" style="position:absolute; top:20%; background:white;  z-index:3; left:40%; height:30px; width:78%;"></div>');
		weaveBoxTop = 0;
		for (i = 0; i < numWefts; i++) {
		
			if(i > 0){
				var weaveBoxTop = weaveBoxTop + 15;
			}
		
			$(".weaveBox").append('<div class="weft' + i + ' base" style="position:absolute; width:100%; height: 15px; top:' + weaveBoxTop + 'px;"></div>');
			$(".weftColorGrid").append('<button class="pickWeft' + i + 'Color" style="position:absolute;  top:' + weaveBoxTop + 'px; width:15px; height:15px;" onclick=\'$(".pickWeftColorsDisplay div").css("display", "none"); $(".weft' + i + 'Color").css("display", "block");\' ></button>');
			$(".pickWeftColorsDisplay").append('<div class="weft' + i + 'Color" style="display:none;">Click to set warp '+  i + ': <input class="color weftColorInput" onchange="$(\'.weft'+i+', pickWeft' + i + 'Color\').css(\'background\',\'#\'+this.color);"></input></div>');
		}

		$(".tryBox").append('<div class="warpColorGrid"></div>');
			$(".tryBox").append('<div class="pickWarpColorsDisplay" style="position:absolute; top:20%; background:white; left:0; height:30px; width:78%;"></div>');
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
	
		//warp color picker stuff
		for (i = 0; i < numWarps; i++) { 
		if(i > 0){
					warpLeft = warpLeft + 15
				}
			$(".warpColorGrid").append('<button class="pickWarp' + i + 'Color" style="position:absolute; left:' + warpLeft + 'px; width:15px; height:15px;" onclick=\'$(".pickWarpColorsDisplay div").css("display", "none"); $(".warp' + i + 'Color").css("display", "block");\' ></button>');
			$(".pickWarpColorsDisplay").append('<div class="warp' + i + 'Color" style="display:none;">Click to set warp '+  i + ': <input class="color warpColorInput" onchange="$(\'.warp'+i+'\').css(\'background\',\'#\'+this.color);"></input></div>');
		}	
	
	
	
		$(".tryBox").append('</div>');
	
	
		$(".tryBox").append('</div>');



		//manage the tie-up grid

		//column one
		$(".tieGridColOne > .tieGridRowOne").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessFour").addClass("treadleOne");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessFour").removeClass("treadleOne");
		});

		$(".tieGridColOne > .tieGridRowTwo").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessThree").addClass("treadleOne");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessThree").removeClass("treadleOne");
		});

		$(".tieGridColOne > .tieGridRowThree").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessTwo").addClass("treadleOne");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessTwo").removeClass("treadleOne");
		});

		$(".tieGridColOne > .tieGridRowFour").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessOne").addClass("treadleOne");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessOne").removeClass("treadleOne");
		});

		//column two
		$(".tieGridColTwo > .tieGridRowOne").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessFour").addClass("treadleTwo");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessFour").removeClass("treadleTwo");
		});

		$(".tieGridColTwo > .tieGridRowTwo").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessThree").addClass("treadleTwo");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessThree").removeClass("treadleTwo");
		});

		$(".tieGridColTwo > .tieGridRowThree").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessTwo").addClass("treadleTwo");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessTwo").removeClass("treadleTwo");
		});

		$(".tieGridColTwo > .tieGridRowFour").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessOne").addClass("treadleTwo");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessOne").removeClass("treadleTwo");
		});

		//column three
		$(".tieGridColThree > .tieGridRowOne").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessFour").addClass("treadleThree");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessFour").removeClass("treadleThree");
		});

		$(".tieGridColThree > .tieGridRowTwo").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessThree").addClass("treadleThree");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessThree").removeClass("treadleThree");
		});

		$(".tieGridColThree > .tieGridRowThree").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessTwo").addClass("treadleThree");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessTwo").removeClass("treadleThree");
		});

		$(".tieGridColThree > .tieGridRowFour").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessOne").addClass("treadleThree");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessOne").removeClass("treadleThree");
		});

		//column four
		$(".tieGridColFour > .tieGridRowOne").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessFour").addClass("treadleFour");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessFour").removeClass("treadleFour");
		});

		$(".tieGridColFour > .tieGridRowTwo").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessThree").addClass("treadleFour");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessThree").removeClass("treadleFour");
		});

		$(".tieGridColFour > .tieGridRowThree").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessTwo").addClass("treadleFour");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessTwo").removeClass("treadleFour");
		});

		$(".tieGridColFour > .tieGridRowFour").funcToggle('click', function() {
			 $(this).css('background', 'grey');
			 $(".harnessOne").addClass("treadleFour");
		}, function() {
			 $(this).css('background', '');
			 $(".harnessOne").removeClass("treadleFour");
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
	});
