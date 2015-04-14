$(document).ready(function() {
		
	var numWarps = 100;
	var numWefts = 100;

	var warpPercent = numWarps/100;
	var weftPercent = numWefts/100;
	
//hGrid maker 

	$(".tryBox").append('<div class="hGrid">');

	for (i = 0; i < numWarps; i++) { 
		$(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0; left:' + i + '%; height:100%; width:' + warpPercent + '%;" ><div class="hGridRow1" style="border-style:solid; border-color: rgb(160,160,255);"></div><div class="hGridRow2"></div><div class="hGridRow3"></div><div class="hGridRow4"></div></div>');			
	}
	
	$(".tryBox").append('</div>');
	
//treadle push grid maker 

	$(".tryBox").append('<div class="treadleGrid">');

	for (i = 0; i < numWarps; i++) { 
		$(".treadleGrid").append('<div id="' + i + '" style="position:absolute; right:0; top:' + i + '%; width:100%; height:' + weftPercent + '%;" ><div class="treadleGridCol1"></div><div class="treadleGridCol2"></div><div class="treadleGridCol3"></div><div class="treadleGridCol4"></div></div>');			
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

	$(".tryBox").append('<div class="weaveBox">');

	for (w = 0; w < numWefts; w++) {
		var pass = 'pass' + w;
		$(".weaveBox").append('<div class=' + pass + ' style="position:absolute; width:100%; top:' + w + '%;">');
		for (i = 0; i < numWarps; i++) { 
			$('.' + pass).append('<div class="warp' + i + '" style="position:absolute; left:' + i + '%; height:' + weftPercent +'%; width:' + warpPercent + '%;" ></div>');			
		}
	}
	$(".tryBox").append('</div></div>');
	
	
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
		 $(this).css('background', 'white');
		 $(".harnessFour").removeClass("treadleTwo");
	});

	$(".tieGridColTwo > .tieGridRowTwo").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessThree").addClass("treadleTwo");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessThree").removeClass("treadleTwo");
	});

	$(".tieGridColTwo > .tieGridRowThree").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessTwo").addClass("treadleTwo");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessTwo").removeClass("treadleTwo");
	});

	$(".tieGridColTwo > .tieGridRowFour").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessOne").addClass("treadleTwo");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessOne").removeClass("treadleTwo");
	});

	//column three
	$(".tieGridColThree > .tieGridRowOne").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessFour").addClass("treadleThree");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessFour").removeClass("treadleThree");
	});

	$(".tieGridColThree > .tieGridRowTwo").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessThree").addClass("treadleThree");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessThree").removeClass("treadleThree");
	});

	$(".tieGridColThree > .tieGridRowThree").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessTwo").addClass("treadleThree");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessTwo").removeClass("treadleThree");
	});

	$(".tieGridColThree > .tieGridRowFour").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessOne").addClass("treadleThree");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessOne").removeClass("treadleThree");
	});

	//column four
	$(".tieGridColFour > .tieGridRowOne").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessFour").addClass("treadleFour");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessFour").removeClass("treadleFour");
	});

	$(".tieGridColFour > .tieGridRowTwo").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessThree").addClass("treadleFour");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessThree").removeClass("treadleFour");
	});

	$(".tieGridColFour > .tieGridRowThree").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessTwo").addClass("treadleFour");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessTwo").removeClass("treadleFour");
	});

	$(".tieGridColFour > .tieGridRowFour").funcToggle('click', function() {
		 $(this).css('background', 'grey');
		 $(".harnessOne").addClass("treadleFour");
	}, function() {
		 $(this).css('background', 'white');
		 $(".harnessOne").removeClass("treadleFour");
	});






});
