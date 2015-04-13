$(document).ready(function() {

	
		
	var numWarps = 100;
	var numWefts = 100;

	var warpPercent = numWarps/100;
	var weftPercent = numWefts/100;
	
//hGrid maker 

	$(".tryBox").append('<div class="hGrid">');

	for (i = 0; i < numWarps; i++) { 
		$(".hGrid").append('<div id="' + i + '" style="position:absolute; top:0; left:' + i + '%; border-style:solid; height:100%; width:' + warpPercent + '%;" ><div class="hGridRow1"></div><div class="hGridRow2"></div><div class="hGridRow3"></div><div class="hGridRow4"></div></div>');			
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

	for (i = 0; i < numWarps; i++) { 
		$(".weaveBox").append('<div class="warp' + i + ' pass'+ i +'" style="position:absolute; top:0; left:' + i + '%; border-style:solid; height:' + weftPercent +'%; width:' + warpPercent + '%;" ></div>');			
	}
	
	for (i = 0; i < numWefts; i++) { 
		$(".weaveBox > DIV").css('top:' + i'%');
		}
	
	$(".tryBox").append('</div>');



});
