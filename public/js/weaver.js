$(document).ready(function() {

//set the warp colors

$(".warpOneColor").click(function() {
	$("#pickWarpOneColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	$("#pickWarpOneColor").addClass("display");
	});

$(".warpTwoColor").click(function() {
	$("#pickWarpTwoColor").removeClass("hide");
	$("#pickWarpOneColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpOneColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	$("#pickWarpTwoColor").addClass("display");
	});

$(".warpThreeColor").click(function() {
	$("#pickWarpThreeColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpOneColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpOneColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	$("#pickWarpThreeColor").addClass("display");
	});
	
$(".warpFourColor").click(function() {
	$("#pickWarpFourColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpOneColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpOneColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	
	$("#pickWarpFourColor").addClass("display");
	});

$(".warpFiveColor").click(function() {
	$("#pickWarpFiveColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpOneColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpOneColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	
	$("#pickWarpFiveColor").addClass("display");
	});
	
$(".warpSixColor").click(function() {
	$("#pickWarpSixColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpOneColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpOneColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	
	$("#pickWarpSixColor").addClass("display");
	});
	
$(".warpSevenColor").click(function() {
	$("#pickWarpSevenColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpOneColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpOneColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	
	$("#pickWarpSevenColor").addClass("display");
	});
	
$(".warpEightColor").click(function() {
	$("#pickWarpEightColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpOneColor, #pickWarpNineColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpOneColor, #pickWarpNineColor, #pickWarpTenColor").removeClass("display");
	
	$("#pickWarpEightColor").addClass("display");
	});
	
$(".warpNineColor").click(function() {
	$("#pickWarpNineColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpOneColor, #pickWarpTenColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpOneColor, #pickWarpTenColor").removeClass("display");
	
	$("#pickWarpNineColor").addClass("display");
	});
	
$(".warpTenColor").click(function() {
	$("#pickWarpTenColor").removeClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpOneColor").addClass("hide");
	$("#pickWarpTwoColor, #pickWarpThreeColor, #pickWarpFourColor, #pickWarpFiveColor, #pickWarpSixColor, #pickWarpSevenColor, #pickWarpEightColor, #pickWarpNineColor, #pickWarpOneColor").removeClass("display");
	
	$("#pickWarpTenColor").addClass("display");
	});
/*
the problem here is that there is a bunch of repetition...
i could pump this out with a "for loop".
but, I'll have to ask users how many warps they want, 
then i'll run the for loop until i reach the number
specified by the user.I just want to see it in action first..
*/

//warp one
	$( ".hGridColOne > .hGridRowFour" ).click(function() {
	 $(".warpOne").alterClass("harness*");
	 	$(" .hGridColOne > .hGridRowThree, .hGridColOne > .hGridRowTwo, .hGridColOne > .hGridRowOne").removeClass("activeButton");
	 	$(" .hGridColOne > .hGridRowFour").addClass("activeButton");
	  $(".warpOne").addClass("harnessOne ");
	});
	
	$( ".hGridColOne > .hGridRowThree" ).click(function() {
	$(".warpOne").alterClass("harness*");
	$(" .hGridColOne > .hGridRowFour, .hGridColOne > .hGridRowTwo, .hGridColOne > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColOne > .hGridRowThree").addClass("activeButton");
	$(".warpOne").addClass("harnessTwo");
	});
	$( ".hGridColOne > .hGridRowTwo" ).click(function() {
	$(".warpOne").alterClass("harness*");
	$(" .hGridColOne > .hGridRowFour, .hGridColOne > .hGridRowThree, .hGridColOne > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColOne > .hGridRowTwo").addClass("activeButton");
	$(".warpOne").addClass("harnessThree");
	});
	$( ".hGridColOne > .hGridRowOne" ).click(function() {
	$(".warpOne").alterClass("harness*");
	$(" .hGridColOne > .hGridRowFour, .hGridColOne > .hGridRowTwo, .hGridColOne > .hGridRowThree").removeClass("activeButton");
	$(" .hGridColOne > .hGridRowOne").addClass("activeButton");
	  $(".warpOne").addClass("harnessFour");
	});
	
	//warp two
	$( ".hGridColTwo > .hGridRowFour" ).click(function() {
	$(".warpTwo").alterClass("harness*");
	$(" .hGridColTwo > .hGridRowThree, .hGridColTwo > .hGridRowTwo, .hGridColTwo > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColTwo > .hGridRowFour").addClass("activeButton");
	  $(".warpTwo").addClass("harnessOne");
	});
	
	$( ".hGridColTwo > .hGridRowThree" ).click(function() {
	$(".warpTwo").alterClass("harness*");
	$(" .hGridColTwo > .hGridRowFour, .hGridColTwo > .hGridRowTwo, .hGridColTwo > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColTwo > .hGridRowThree").addClass("activeButton");
	$(".warpTwo").addClass("harnessTwo");
	});
	$( ".hGridColTwo > .hGridRowTwo" ).click(function() {
	$(".warpTwo").alterClass("harness*");
	$(" .hGridColTwo > .hGridRowThree, .hGridColTwo > .hGridRowFour, .hGridColTwo > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColTwo > .hGridRowTwo").addClass("activeButton");
	  $(".warpTwo").addClass("harnessThree");
	});
	$( ".hGridColTwo > .hGridRowOne" ).click(function() {
	$(".warpTwo").alterClass("harness*");
	$(" .hGridColTwo > .hGridRowFour, .hGridColTwo > .hGridRowTwo, .hGridColTwo > .hGridRowThree").removeClass("activeButton");
	$(" .hGridColTwo > .hGridRowOne").addClass("activeButton");
	$(".warpTwo").addClass("harnessFour");
	});
	
	//warp three
	$( ".hGridColThree > .hGridRowFour" ).click(function() {
	$(".warpThree").alterClass("harness*");
	$(" .hGridColThree > .hGridRowThree, .hGridColThree > .hGridRowTwo, .hGridColThree > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColThree > .hGridRowFour").addClass("activeButton");
	$(".warpThree").addClass("harnessOne");
	});
	
	$( ".hGridColThree > .hGridRowThree" ).click(function() {
	$(".warpThree").alterClass("harness*");
	$(" .hGridColThree > .hGridRowFour, .hGridColThree > .hGridRowTwo, .hGridColThree > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColThree > .hGridRowThree").addClass("activeButton");
	  $(".warpThree").addClass("harnessTwo");
	});
	$( ".hGridColThree > .hGridRowTwo" ).click(function() {
	$(".warpThree").alterClass("harness*");
	$(" .hGridColThree > .hGridRowFour, .hGridColThree > .hGridRowThree, .hGridColThree > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColThree > .hGridRowTwo").addClass("activeButton");
	  $(".warpThree").addClass("harnessThree");
	});
	$( ".hGridColThree > .hGridRowOne" ).click(function() {
	$(".warpThree").alterClass("harness*");
	$(" .hGridColThree > .hGridRowFour, .hGridColThree > .hGridRowTwo, .hGridColThree > .hGridRowThree").removeClass("activeButton");
	$(" .hGridColThree > .hGridRowOne").addClass("activeButton");
	  $(".warpThree").addClass("harnessFour");
	});
	
	//warp four
	$( ".hGridColFour > .hGridRowFour" ).click(function() {
	$(".warpFour").alterClass("harness*");
	$(" .hGridColFour > .hGridRowThree, .hGridColFour > .hGridRowTwo, .hGridColFour > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColFour > .hGridRowFour").addClass("activeButton");
	$(".warpFour").addClass("harnessOne");
	});
	
	$( ".hGridColFour > .hGridRowThree" ).click(function() {
	$(".warpFour").alterClass("harness*");
	$(" .hGridColFour > .hGridRowFour, .hGridColFour > .hGridRowTwo, .hGridColFour > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColFour > .hGridRowThree").addClass("activeButton");
	  $(".warpFour").addClass("harnessTwo");
	});
	$( ".hGridColFour > .hGridRowTwo" ).click(function() {
	$(".warpFour").alterClass("harness*");
	$(" .hGridColFour > .hGridRowThree, .hGridColFour > .hGridRowFour, .hGridColFour > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColFour > .hGridRowTwo").addClass("activeButton");
	  $(".warpFour").addClass("harnessThree ");
	});
	$( ".hGridColFour > .hGridRowOne" ).click(function() {
	$(".warpFour").alterClass("harness*");
	$(" .hGridColFour > .hGridRowThree, .hGridColFour > .hGridRowTwo, .hGridColFour > .hGridRowFour").removeClass("activeButton");
	$(" .hGridColFour > .hGridRowOne").addClass("activeButton");
	  $(".warpFour").addClass("harnessFour");
	});
	
	//warp five
	$( ".hGridColFive > .hGridRowFour" ).click(function() {
	 $(".warpFive").alterClass("harness*");
	$(" .hGridColFive > .hGridRowThree, .hGridColFive > .hGridRowTwo, .hGridColFive > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColFive > .hGridRowFour").addClass("activeButton");
	  $(".warpFive").addClass("harnessOne ");
	});
	
	$( ".hGridColFive > .hGridRowThree" ).click(function() {
	$(".warpFive").alterClass("harness*");
	$(" .hGridColFive > .hGridRowFour, .hGridColFive > .hGridRowTwo, .hGridColFive > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColFive > .hGridRowThree").addClass("activeButton");
	  $(".warpFive").addClass("harnessTwo ");
	});
	$( ".hGridColFive > .hGridRowTwo" ).click(function() {
	$(".warpFive").alterClass("harness*");
	$(" .hGridColFive > .hGridRowThree, .hGridColFive > .hGridRowFour, .hGridColFive > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColFive > .hGridRowTwo").addClass("activeButton");
	  $(".warpFive").addClass("harnessThree");
	});
	$( ".hGridColFive > .hGridRowOne" ).click(function() {
	$(".warpFive").alterClass("harness*");
	$(" .hGridColFive > .hGridRowThree, .hGridColFive > .hGridRowTwo, .hGridColFive > .hGridRowFour").removeClass("activeButton");
	$(" .hGridColFive > .hGridRowOne").addClass("activeButton");
	  $(".warpFive").addClass("harnessFour" );
	});
	
	//warp six
	$( ".hGridColSix > .hGridRowFour" ).click(function() {
	$(".warpSix").alterClass("harness*");
	$(" .hGridColSix > .hGridRowThree, .hGridColSix > .hGridRowTwo, .hGridColSix > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColSix > .hGridRowFour").addClass("activeButton");
	  $(".warpSix").addClass("harnessOne");
	});
	
	$( ".hGridColSix > .hGridRowThree" ).click(function() {
	$(".warpSix").alterClass("harness*");
	$(" .hGridColSix > .hGridRowFour, .hGridColSix > .hGridRowTwo, .hGridColSix > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColSix > .hGridRowThree").addClass("activeButton");
	$(".warpSix").addClass("harnessTwo");
	});
	$( ".hGridColSix > .hGridRowTwo" ).click(function() {
	$(".warpSix").alterClass("harness*");
	$(" .hGridColSix > .hGridRowThree, .hGridColSix > .hGridRowFour, .hGridColSix > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColSix > .hGridRowTwo").addClass("activeButton");
	  $(".warpSix").addClass("harnessThree");
	});
	$( ".hGridColSix > .hGridRowOne" ).click(function() {
	$(".warpSix").alterClass("harness*");
	$(" .hGridColSix > .hGridRowThree, .hGridColSix > .hGridRowTwo, .hGridColSix > .hGridRowFour").removeClass("activeButton");
	$(" .hGridColSix > .hGridRowOne").addClass("activeButton");
	  $(".warpSix").addClass("harnessFour");
	});
	
	//warp seven
	$( ".hGridColSeven > .hGridRowFour" ).click(function() {
	 $(".warpSeven").alterClass("harness*");
	$(" .hGridColSeven > .hGridRowThree, .hGridColSeven > .hGridRowTwo, .hGridColSeven > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColSeven > .hGridRowFour").addClass("activeButton");
	  $(".warpSeven").addClass("harnessOne");
	});
	
	$( ".hGridColSeven > .hGridRowThree" ).click(function() {
	$(".warpSeven").alterClass("harness*");
	$(" .hGridColSeven > .hGridRowFour, .hGridColSeven > .hGridRowTwo, .hGridColSeven > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColSeven > .hGridRowThree").addClass("activeButton");
	  $(".warpSeven").addClass("harnessTwo");
	});
	$( ".hGridColSeven > .hGridRowTwo" ).click(function() {
	$(".warpSeven").alterClass("harness*");
	$(" .hGridColSeven > .hGridRowFour, .hGridColSeven > .hGridRowThree, .hGridColSeven > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColSeven > .hGridRowTwo").addClass("activeButton");
	  $(".warpSeven").addClass("harnessThree");
	});
	$( ".hGridColSeven > .hGridRowOne" ).click(function() {
	$(".warpSeven").alterClass("harness*");
	$(" .hGridColSeven > .hGridRowFour, .hGridColSeven > .hGridRowTwo, .hGridColSeven > .hGridRowThree").removeClass("activeButton");
	$(" .hGridColSeven > .hGridRowOne").addClass("activeButton");
	  $(".warpSeven").addClass("harnessFour");
	});
	
	//warp eight
	$( ".hGridColEight > .hGridRowFour" ).click(function() {
	 $(".warpEight").alterClass("harness*");
	$(" .hGridColEight > .hGridRowThree, .hGridColEight > .hGridRowTwo, .hGridColEight > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColEight > .hGridRowFour").addClass("activeButton");
	 $(".warpEight").addClass("harnessOne");
	});
	
	$( ".hGridColEight > .hGridRowThree" ).click(function() {
	$(".warpEight").alterClass("harness*");
	$(" .hGridColEight > .hGridRowFour, .hGridColEight > .hGridRowTwo, .hGridColEight > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColEight > .hGridRowThree").addClass("activeButton");
	$(".warpEight").addClass("harnessTwo");
	});
	$( ".hGridColEight > .hGridRowTwo" ).click(function() {
	$(".warpEight").alterClass("harness*");
	$(" .hGridColEight > .hGridRowThree, .hGridColEight > .hGridRowFour, .hGridColEight > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColEight > .hGridRowTwo").addClass("activeButton");
	  $(".warpEight").addClass("harnessThree");
	});
	$( ".hGridColEight > .hGridRowOne" ).click(function() {
	$(".warpEight").alterClass("harness*");
	$(" .hGridColEight > .hGridRowThree, .hGridColEight > .hGridRowTwo, .hGridColEight > .hGridRowFour").removeClass("activeButton");
	$(" .hGridColEight > .hGridRowOne").addClass("activeButton");
	  $(".warpEight").addClass("harnessFour");
	});
	
	//warp nine
	$( ".hGridColNine > .hGridRowFour" ).click(function() {
	$(".warpNine").alterClass("harness*");
	$(" .hGridColNine > .hGridRowThree, .hGridColNine > .hGridRowTwo, .hGridColNine > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColNine > .hGridRowFour").addClass("activeButton");
	  $(".warpNine").addClass("harnessOne");
	});
	
	$( ".hGridColNine > .hGridRowThree" ).click(function() {
	$(".warpNine").alterClass("harness*");
	$(" .hGridColNine > .hGridRowFour, .hGridColNine > .hGridRowTwo, .hGridColNine > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColNine > .hGridRowThree").addClass("activeButton");
	$(".warpNine").addClass("harnessTwo");
	});
	$( ".hGridColNine > .hGridRowTwo" ).click(function() {
	$(".warpNine").alterClass("harness*");
	$(" .hGridColNine > .hGridRowThree, .hGridColNine > .hGridRowFour, .hGridColNine > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColNine > .hGridRowTwo").addClass("activeButton");
	$(".warpNine").addClass("harnessThree");
	});
	$( ".hGridColNine > .hGridRowOne" ).click(function() {
	$(".warpNine").alterClass("harness*");
	$(" .hGridColNine > .hGridRowThree, .hGridColNine > .hGridRowTwo, .hGridColNine > .hGridRowFour").removeClass("activeButton");
	$(" .hGridColNine > .hGridRowOne").addClass("activeButton");
	  $(".warpNine").addClass("harnessFour");
	});
	
	//warp Ten
	$( ".hGridColTen > .hGridRowFour" ).click(function() {
	$(".warpTen").alterClass("harness*");
	$(" .hGridColTen > .hGridRowThree, .hGridColTen > .hGridRowTwo, .hGridColTen > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColTen > .hGridRowFour").addClass("activeButton");
	  $(".warpTen").addClass("harnessOne");
	});
	
	$( ".hGridColTen > .hGridRowThree" ).click(function() {
	$(".warpTen").alterClass("harness*");
	$(" .hGridColTen > .hGridRowFour, .hGridColTen > .hGridRowTwo, .hGridColTen > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColTen > .hGridRowThree").addClass("activeButton");
	  $(".warpTen").addClass("harnessTwo");
	});
	$( ".hGridColTen > .hGridRowTwo" ).click(function() {
	$(".warpTen").alterClass("harness*");
	$(" .hGridColTen > .hGridRowThree, .hGridColTen > .hGridRowFour, .hGridColTen > .hGridRowOne").removeClass("activeButton");
	$(" .hGridColTen > .hGridRowTwo").addClass("activeButton");
	  $(".warpTen").addClass("harnessThree");
	});
	$( ".hGridColTen > .hGridRowOne" ).click(function() {
	$(".warpTen").alterClass("harness*");
	$(" .hGridColTen > .hGridRowThree, .hGridColTen > .hGridRowTwo, .hGridColTen > .hGridRowFour").removeClass("activeButton");
	$(" .hGridColTen > .hGridRowOne").addClass("activeButton");
	  $(".warpTen").addClass("harnessFour");
	});
});
