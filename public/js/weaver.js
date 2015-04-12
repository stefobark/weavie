$(document).ready(function() {

$('[data-toggle="popover"]').popover();   

//manage the tie-up grid

//column one
$(".tieGridColOne > .tieGridRowOne").funcToggle('click', function() {
    $(this).css('background', 'grey');
    $(".harnessFour").addClass("treadleOne");
}, function() {
    $(this).css('background', 'white');
    $(".harnessFour").removeClass("treadleOne");
});

$(".tieGridColOne > .tieGridRowTwo").funcToggle('click', function() {
    $(this).css('background', 'grey');
    $(".harnessThree").addClass("treadleOne");
}, function() {
    $(this).css('background', 'white');
    $(".harnessThree").removeClass("treadleOne");
});

$(".tieGridColOne > .tieGridRowThree").funcToggle('click', function() {
    $(this).css('background', 'grey');
    $(".harnessTwo").addClass("treadleOne");
}, function() {
    $(this).css('background', 'white');
    $(".harnessTwo").removeClass("treadleOne");
});

$(".tieGridColOne > .tieGridRowFour").funcToggle('click', function() {
    $(this).css('background', 'grey');
    $(".harnessOne").addClass("treadleOne");
}, function() {
    $(this).css('background', 'white');
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

/*pick weft colors */
	
$(".weftOneColor").click(function() {
	$("#pickWeftOneColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	$("#pickWeftOneColor").addClass("display");
	});

$(".weftTwoColor").click(function() {
	$("#pickWeftTwoColor").removeClass("hide");
	$("#pickWeftOneColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftOneColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	$("#pickWeftTwoColor").addClass("display");
	});

$(".weftThreeColor").click(function() {
	$("#pickWeftThreeColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftOneColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftOneColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	$("#pickWeftThreeColor").addClass("display");
	});
	
$(".weftFourColor").click(function() {
	$("#pickWeftFourColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftOneColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftOneColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	
	$("#pickWeftFourColor").addClass("display");
	});

$(".weftFiveColor").click(function() {
	$("#pickWeftFiveColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftOneColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftOneColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	
	$("#pickWeftFiveColor").addClass("display");
	});
	
$(".weftSixColor").click(function() {
	$("#pickWeftSixColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftOneColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftOneColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	
	$("#pickWeftSixColor").addClass("display");
	});
	
$(".weftSevenColor").click(function() {
	$("#pickWeftSevenColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftOneColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftOneColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	
	$("#pickWeftSevenColor").addClass("display");
	});
	
$(".weftEightColor").click(function() {
	$("#pickWeftEightColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftOneColor, #pickWeftNineColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftOneColor, #pickWeftNineColor, #pickWeftTenColor").removeClass("display");
	
	$("#pickWeftEightColor").addClass("display");
	});
	
$(".weftNineColor").click(function() {
	$("#pickWeftNineColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftOneColor, #pickWeftTenColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftOneColor, #pickWeftTenColor").removeClass("display");
	
	$("#pickWeftNineColor").addClass("display");
	});
	
$(".weftTenColor").click(function() {
	$("#pickWeftTenColor").removeClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftOneColor").addClass("hide");
	$("#pickWeftTwoColor, #pickWeftThreeColor, #pickWeftFourColor, #pickWeftFiveColor, #pickWeftSixColor, #pickWeftSevenColor, #pickWeftEightColor, #pickWeftNineColor, #pickWeftOneColor").removeClass("display");
	
	$("#pickWeftTenColor").addClass("display");
	});


/*
the problem here is that there is a bunch of repetition...
i guess i could pump this out with a "for loop".
I'll have to ask users how many warps they want, 
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

//pass shuttle row one

	//treadle one
		$( ".weftGridColOne > .weftGridRowOne" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowOne, .weftGridColThree > .weftGridRowOne, .weftGridColFour > .weftGridRowOne").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowOne").addClass("activeButton");
		 	$(".treadleTwo.rowOne, .treadleThree.rowOne, .treadleFour.rowOne").removeClass("above");
		  $(".treadleOne.rowOne").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowOne" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowOne, .weftGridColThree > .weftGridRowOne, .weftGridColFour > .weftGridRowOne").removeClass("activeButton");
		 	$(".treadleOne.rowOne, .treadleThree.rowOne, .treadleFour.rowOne").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowOne").addClass("activeButton");
		  $(".treadleTwo.rowOne").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowOne" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowOne, .weftGridColTwo > .weftGridRowOne, .weftGridColFour > .weftGridRowOne").removeClass("activeButton");
		 	$(".treadleOne.rowOne, .treadleTwo.rowOne, .treadleFou.rowOner").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowOne").addClass("activeButton");
		  $(".treadleThree.rowOne").addClass("above");
		});

	//treadle four
		$( ".weftGridColFour > .weftGridRowOne" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowOne, .weftGridColTwo > .weftGridRowOne, .weftGridColThree > .weftGridRowOne").removeClass("activeButton");
		 	$(".treadleOne.rowOne, .treadleTwo.rowOne, .treadleThree.rowOne").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowOne").addClass("activeButton");
		  $(".treadleFour.rowOne").addClass("above");
		});


//pass shuttle row two

	//treadle one
		$( ".weftGridColOne > .weftGridRowTwo" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowTwo, .weftGridColThree > .weftGridRowTwo, .weftGridColFour > .weftGridRowTwo").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowTwo").addClass("activeButton");
		 	$(".treadleTwo.rowTwo, .treadleThree.rowTwo, .treadleFour.rowTwo").removeClass("above");
		  $(".treadleOne.rowTwo").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowTwo" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowTwo, .weftGridColThree > .weftGridRowTwo, .weftGridColFour > .weftGridRowTwo").removeClass("activeButton");
		 	$(".treadleOne.rowTwo, .treadleThree.rowTwo, .treadleFour.rowTwo").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowTwo").addClass("activeButton");
		  $(".treadleTwo.rowTwo").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowTwo" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowTwo, .weftGridColTwo > .weftGridRowTwo, .weftGridColFour > .weftGridRowTwo").removeClass("activeButton");
		 	$(".treadleOne.rowTwo, .treadleTwo.rowTwo, .treadleFour.rowTwo").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowTwo").addClass("activeButton");
		  $(".treadleThree.rowTwo").addClass("above");
		});

	//treadle four
		$( ".weftGridColFour > .weftGridRowTwo" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowTwo, .weftGridColTwo > .weftGridRowTwo, .weftGridColThree > .weftGridRowTwo").removeClass("activeButton");
		 	$(".treadleOne.rowTwo, .treadleTwo.rowTwo, .treadleThree.rowTwo").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowTwo").addClass("activeButton");
		  $(".treadleFour.rowTwo").addClass("above");
		});
		
//pass shuttle row three

	//treadle one
		$( ".weftGridColOne > .weftGridRowThree" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowThree, .weftGridColThree > .weftGridRowThree, .weftGridColFour > .weftGridRowThree").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowThree").addClass("activeButton");
		 	$(".treadleTwo.rowThree, .treadleThree.rowThree, .treadleTwo.rowThree").removeClass("above");
		  $(".treadleOne.rowThree").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowThree" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowThree, .weftGridColThree > .weftGridRowThree, .weftGridColFour > .weftGridRowThree").removeClass("activeButton");
		 	$(".treadleOne.rowThree, .treadleThree.rowThree, .treadleFour.rowThree").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowThree").addClass("activeButton");
		  $(".treadleTwo.rowThree").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowThree" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowThree, .weftGridColTwo > .weftGridRowThree, .weftGridColFour > .weftGridRowThree").removeClass("activeButton");
		 	$(".treadleOne.rowThree, .treadleTwo.rowThree, .treadleFour.rowThree").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowThree").addClass("activeButton");
		  $(".treadleThree.rowThree").addClass("above");
		});

	//treadle four
		$( ".weftGridColFour > .weftGridRowThree" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowThree, .weftGridColTwo > .weftGridRowThree, .weftGridColThree > .weftGridRowThree").removeClass("activeButton");
		 	$(".treadleOne.rowThree, .treadleTwo.rowThree, .treadleThree.rowThree").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowThree").addClass("activeButton");
		  $(".treadleFour.rowThree").addClass("above");
		});
		
//pass shuttle row four

	//treadle one
		$( ".weftGridColOne > .weftGridRowFour" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowFour, .weftGridColThree > .weftGridRowFour, .weftGridColFour > .weftGridRowFour").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowFour").addClass("activeButton");
		 	$(".treadleTwo.rowFour, .treadleThree.rowFour, .treadleFour.rowFour").removeClass("above");
		  $(".treadleOne.rowFour").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowFour" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowFour, .weftGridColThree > .weftGridRowFour, .weftGridColFour > .weftGridRowFour").removeClass("activeButton");
		 	$(".treadleOne.rowFour, .treadleThree.rowFour, .treadleFour.rowFour").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowFour").addClass("activeButton");
		  $(".treadleTwo.rowFour").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowFour" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowFour, .weftGridColTwo > .weftGridRowFour, .weftGridColFour > .weftGridRowFour").removeClass("activeButton");
		 	$(".treadleOne.rowFour, .treadleTwo.rowFour, .treadleFour.rowFour").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowFour").addClass("activeButton");
		  $(".treadleThree.rowFour").addClass("above");
		});
//treadle four
		$( ".weftGridColFour > .weftGridRowFour" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowFour, .weftGridColTwo > .weftGridRowFour, .weftGridColThree > .weftGridRowFour").removeClass("activeButton");
		 	$(".treadleOne.rowFour, .treadleTwo.rowFour, .treadleThree.rowFour").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowFour").addClass("activeButton");
		  $(".treadleFour.rowFour").addClass("above");
		});
		
//pass shuttle row five

	//treadle one
		$( ".weftGridColOne > .weftGridRowFive" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowFive, .weftGridColThree > .weftGridRowFive, .weftGridColFour > .weftGridRowFive").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowFive").addClass("activeButton");
		 	$(".treadleTwo.rowFive, .treadleThree.rowFive, .treadleFour.rowFive").removeClass("above");
		  $(".treadleOne.rowFive").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowFive" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowFive, .weftGridColThree > .weftGridRowFive, .weftGridColFour > .weftGridRowFive").removeClass("activeButton");
		 	$(".treadleOne.rowFive, .treadleThree.rowFive, .treadleFour.rowFive").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowFive").addClass("activeButton");
		  $(".treadleTwo.rowFive").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowFive" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowFive, .weftGridColTwo > .weftGridRowFive, .weftGridColFour > .weftGridRowFive").removeClass("activeButton");
		 	$(".treadleOne.rowFive, .treadleTwo.rowFive, .treadleFour.rowFive").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowFive").addClass("activeButton");
		  $(".treadleThree.rowFive").addClass("above");
		});
//treadle four
		$( ".weftGridColFour > .weftGridRowFive" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowFive, .weftGridColTwo > .weftGridRowFive, .weftGridColThree > .weftGridRowFive").removeClass("activeButton");
		 	$(".treadleOne.rowFive, .treadleTwo.rowFive, .treadleThree.rowFive").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowFive").addClass("activeButton");
		  $(".treadleFour.rowFive").addClass("above");
		});

//pass shuttle row six

	//treadle one
		$( ".weftGridColOne > .weftGridRowSix" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowSix, .weftGridColThree > .weftGridRowSix, .weftGridColFour > .weftGridRowSix").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowSix").addClass("activeButton");
		 	$(".treadleTwo.rowSix, .treadleThree.rowSix, .treadleFour.rowSix").removeClass("above");
		  $(".treadleOne.rowSix").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowSix" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowSix, .weftGridColThree > .weftGridRowSix, .weftGridColFour > .weftGridRowSix").removeClass("activeButton");
		 	$(".treadleOne.rowSix, .treadleThree.rowSix, .treadleFour.rowSix").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowSix").addClass("activeButton");
		  $(".treadleTwo.rowSix").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowSix" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowSix, .weftGridColTwo > .weftGridRowSix, .weftGridColFour > .weftGridRowSix").removeClass("activeButton");
		 	$(".treadleOne.rowSix, .treadleTwo.rowSix, .treadleFour.rowSix").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowSix").addClass("activeButton");
		  $(".treadleThree.rowSix").addClass("above");
		});
//treadle four
		$( ".weftGridColFour > .weftGridRowSix" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowSix, .weftGridColTwo > .weftGridRowSix, .weftGridColThree > .weftGridRowSix").removeClass("activeButton");
		 	$(".treadleOne.rowSix, .treadleTwo.rowSix, .treadleThree.rowSix").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowSix").addClass("activeButton");
		  $(".treadleFour.rowSix").addClass("above");
		});

//pass shuttle row seven

	//treadle one
		$( ".weftGridColOne > .weftGridRowSeven" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowSeven, .weftGridColThree > .weftGridRowSeven, .weftGridColFour > .weftGridRowSeven").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowSeven").addClass("activeButton");
		 	$(".treadleTwo.rowSeven, .treadleThree.rowSeven, .treadleFour.rowSeven").removeClass("above");
		  $(".treadleOne.rowSeven").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowSeven" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowSeven, .weftGridColThree > .weftGridRowSeven, .weftGridColFour > .weftGridRowSeven").removeClass("activeButton");
		 	$(".treadleOne.rowSeven, .treadleThree.rowSeven, .treadleFour.rowSeven").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowSeven").addClass("activeButton");
		  $(".treadleTwo.rowSeven").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowSeven" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowSeven, .weftGridColTwo > .weftGridRowSeven, .weftGridColFour > .weftGridRowSeven").removeClass("activeButton");
		 	$(".treadleOne.rowSeven, .treadleTwo.rowSeven, .treadleFour.rowSeven").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowSeven").addClass("activeButton");
		  $(".treadleThree.rowSeven").addClass("above");
		});
//treadle four
		$( ".weftGridColFour > .weftGridRowSeven" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowSeven, .weftGridColTwo > .weftGridRowSeven, .weftGridColThree > .weftGridRowSeven").removeClass("activeButton");
		 	$(".treadleOne.rowSeven, .treadleTwo.rowSeven, .treadleThree.rowSeven").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowSeven").addClass("activeButton");
		  $(".treadleFour.rowSeven").addClass("above");
		});

//pass shuttle row eight

	//treadle one
		$( ".weftGridColOne > .weftGridRowEight" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowEight, .weftGridColThree > .weftGridRowEight, .weftGridColFour > .weftGridRowEight").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowEight").addClass("activeButton");
		 	$(".treadleTwo.rowEight, .treadleThree.rowEight, .treadleFour.rowEight").removeClass("above");
		  $(".treadleOne.rowEight").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowEight" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowEight, .weftGridColThree > .weftGridRowEight, .weftGridColFour > .weftGridRowEight").removeClass("activeButton");
		 	$(".treadleOne.rowEight, .treadleThree.rowEight, .treadleFour.rowEight").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowEight").addClass("activeButton");
		  $(".treadleTwo.rowEight").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowEight" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowEight, .weftGridColTwo > .weftGridRowEight, .weftGridColFour > .weftGridRowEight").removeClass("activeButton");
		 	$(".treadleOne.rowEight, .treadleTwo.rowEight, .treadleFour.rowEight").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowEight").addClass("activeButton");
		  $(".treadleThree.rowEight").addClass("above");
		});
//treadle four
		$( ".weftGridColFour > .weftGridRowEight" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowEight, .weftGridColTwo > .weftGridRowEight, .weftGridColThree > .weftGridRowEight").removeClass("activeButton");
		 	$(".treadleOne.rowEight, .treadleTwo.rowEight, .treadleThree.rowEight").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowEight").addClass("activeButton");
		  $(".treadleFour.rowEight").addClass("above");
		});

//pass shuttle row nine

	//treadle one
		$( ".weftGridColOne > .weftGridRowNine" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowNine, .weftGridColThree > .weftGridRowNine, .weftGridColFour > .weftGridRowNine").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowNine").addClass("activeButton");
		 	$(".treadleTwo.rowNine, .treadleThree.rowNine, .treadleFour.rowNine").removeClass("above");
		  $(".treadleOne.rowNine").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowNine" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowNine, .weftGridColThree > .weftGridRowNine, .weftGridColFour > .weftGridRowNine").removeClass("activeButton");
		 	$(".treadleOne.rowNine, .treadleThree.rowNine, .treadleFour.rowNine").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowNine").addClass("activeButton");
		  $(".treadleTwo.rowNine").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowNine" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowNine, .weftGridColTwo > .weftGridRowNine, .weftGridColFour > .weftGridRowNine").removeClass("activeButton");
		 	$(".treadleOne.rowNine, .treadleTwo.rowNine, .treadleFour.rowNine").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowNine").addClass("activeButton");
		  $(".treadleThree.rowNine").addClass("above");
		});
//treadle four
		$( ".weftGridColFour > .weftGridRowNine" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowNine, .weftGridColTwo > .weftGridRowNine, .weftGridColThree > .weftGridRowNine").removeClass("activeButton");
		 	$(".treadleOne.rowNine, .treadleTwo.rowNine, .treadleThree.rowNine").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowNine").addClass("activeButton");
		  $(".treadleFour.rowNine").addClass("above");
		});

//pass shuttle row ten

	//treadle one
		$( ".weftGridColOne > .weftGridRowTen" ).click(function() {
		 	$(" .weftGridColTwo > .weftGridRowTen, .weftGridColThree > .weftGridRowTen, .weftGridColFour > .weftGridRowTen").removeClass("activeButton");
		 	$(" .weftGridColOne > .weftGridRowTen").addClass("activeButton");
		 	$(".treadleTwo.rowTen, .treadleThree.rowTen, .treadleFour.rowTen").removeClass("above");
		  $(".treadleOne.rowTen").addClass("above");
		});

	//treadle two	
		$( ".weftGridColTwo > .weftGridRowTen" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowTen, .weftGridColThree > .weftGridRowTen, .weftGridColFour > .weftGridRowTen").removeClass("activeButton");
		 	$(".treadleOne.rowTen, .treadleThree.rowTen, .treadleFour.rowTen").removeClass("above");
		 	$(" .weftGridColTwo > .weftGridRowTen").addClass("activeButton");
		  $(".treadleTwo.rowTen").addClass("above");
		});
	//treadle three	
		$( ".weftGridColThree > .weftGridRowTen" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowTen, .weftGridColTwo > .weftGridRowTen, .weftGridColFour > .weftGridRowTen").removeClass("activeButton");
		 	$(".treadleOne.rowTen, .treadleTwo.rowTen, .treadleFour.rowTen").removeClass("above");
		 	$(" .weftGridColThree > .weftGridRowTen").addClass("activeButton");
		  $(".treadleThree.rowTen").addClass("above");
		});
//treadle four
		$( ".weftGridColFour > .weftGridRowTen" ).click(function() {
		 	$(" .weftGridColOne > .weftGridRowTen, .weftGridColTwo > .weftGridRowTen, .weftGridColThree > .weftGridRowTen").removeClass("activeButton");
		 	$(".treadleOne.rowTen, .treadleTwo.rowTen, .treadleThree.rowTen").removeClass("above");
		 	$(" .weftGridColFour > .weftGridRowTen").addClass("activeButton");
		  $(".treadleFour.rowTen").addClass("above");
		});


});	
