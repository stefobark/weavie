<!DOCTYPE html>
<html lang='en'>
   <head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>
      <link href="/css/tweaks.css" rel="stylesheet">
      <link href="/css/bootstrap.css" rel="stylesheet">
      <script src="/js/jquery-2.1.1.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      
      <script src="/js/weaver.js"></script>
       <script src="/js/jquery.alterclass.js"></script>
       <script type="text/javascript" src="/js/jscolor/jscolor.js"></script>
              <script type="text/javascript" src="/js/jquery.func_toggle.js"></script>

    </head>
    <body>
    <div class="container">
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
   
   
    	<div class="weaveContainer">
    		 <h1 class="title">Weavie</h1>
    		 <p class="help-block description">Weave Draft Designer</p>
    		 <p class="help-block" id="stepOne">Step One</p>
    		<div><span class="glyphicon glyphicon-question-sign" id="hGridPopOver" data-toggle="popover" data-placement="left" title="Harness Grid" data-content="Attaching warps to the Harness is the first step. Use this Harness Grid to string your threads through the heddles. In other words, selecting a row in this grid will connect the corresponding warp to the corresponding harness. If you change this grid after setting the other grids, you will have to reset them in order to see the changes."></span></div>
			<p class="help-block" id="stepTwo">Step Two</p>
    		<div><span class="glyphicon glyphicon-question-sign" id="warpColorGridPopOver" data-toggle="popover" data-placement="left" title="Warp Color Grid" data-content="Set the color of each warp. Click a button and a field will appear that allows you to enter in the color code for that warp. If you don't know the codes, that's fine. Click the input field and a color map will be displayed."></span></div>
			<p class="help-block" id="stepThree">Step Three</p>
    		<div><span class="glyphicon glyphicon-question-sign" id="tieGridPopOver" data-toggle="popover" data-placement="right" title="Tie-up Grid" data-content="This is the Tie-Up Grid. It represents tying harnesses to treadles. So, in other words, it will connect the grid on the left (which represents tying warps to harnesses) to the grid below (which represents pressing a treadle, which lifts the warps as you pass the weft through)."></span></div>
			<p class="help-block" id="stepFour">Step Four</p>
    		<div><span class="glyphicon glyphicon-question-sign" id="weftGridPopOver" data-toggle="popover" data-placement="right" title="Weft Grid" data-content="These columns represent the four treadles. Clicking a row represents lifting that treadle for that pass of the shuttle (the shuttle is the thing carrying the weft)."></span></div>
			<p class="help-block" id="stepFive">Step Five</p>
    		<div><span class="glyphicon glyphicon-question-sign" id="weftColorPopOver" data-toggle="popover" data-placement="right" title="Weft Color Grid" data-content="Set the color of each weft. This works the same as the warp color picker."></span></div>
			<div class="warpColorPick">
				<div class="warpOneColor"></div>
				<div class="warpTwoColor"></div>
				<div class="warpThreeColor"></div>
				<div class="warpFourColor"></div>
				<div class="warpFiveColor"></div>
				<div class="warpSixColor"></div>
				<div class="warpSevenColor"></div>
				<div class="warpEightColor"></div>
				<div class="warpNineColor"></div>
				<div class="warpTenColor"></div>
				
				<p id="pickWarpOneColor" class="hide pickWarpColors">Click to set warp one: <input class="color warpColorInput" onchange="$('.warpOne, .warpOneColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpTwoColor" class="hide pickWarpColors">Click to set warp two: <input class="color warpColorInput" onchange="$('.warpTwo, .warpTwoColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpThreeColor" class="hide pickWarpColors">Click to set warp three: <input class="color warpColorInput" onchange="$('.warpThree, .warpThreeColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpFourColor" class="hide pickWarpColors">Click to set warp four: <input class="color warpColorInput" onchange="$('.warpFour, .warpFourColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpFiveColor" class="hide pickWarpColors">Click to set warp five: <input class="color warpColorInput" onchange="$('.warpFive, .warpFiveColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpSixColor" class="hide pickWarpColors">Click to set warp six: <input class="color warpColorInput" onchange="$('.warpSix, .warpSixColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpSevenColor" class="hide pickWarpColors">Click to set warp seven: <input class="color warpColorInput" onchange="$('.warpSeven, .warpSevenColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpEightColor" class="hide pickWarpColors">Click to set warp eight: <input class="color warpColorInput" onchange="$('.warpEight, .warpEightColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpNineColor" class="hide pickWarpColors">Click to set warp nine: <input class="color warpColorInput" onchange="$('.warpNine, .warpNineColor').css('background','#'+this.color);"></input></p>
				<p id="pickWarpTenColor" class="hide pickWarpColors">Click to set warp ten: <input class="color warpColorInput" onchange="$('.warpTen, .warpTenColor').css('background','#'+this.color);"></input></p>
			</div>
			<div class="harnessGrid">
				<div class="hGridColOne">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColTwo">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColThree">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColFour">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColFive">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColSix">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColSeven">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColEight">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColNine">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
				<div class="hGridColTen">
					<button class="hGridRowOne"></button>
					<button class="hGridRowTwo"></button>
					<button class="hGridRowThree"></button>
					<button class="hGridRowFour"></button>
				</div>
			</div>
			<div class="tieGrid">
				<div class="tieGridColOne">
					<button class="tieGridRowOne"></button>
					<button class="tieGridRowTwo"></button>
					<button class="tieGridRowThree"></button>
					<button class="tieGridRowFour"></button>
				</div>
				<div class="tieGridColTwo">
					<button class="tieGridRowOne"></button>
					<button class="tieGridRowTwo"></button>
					<button class="tieGridRowThree"></button>
					<button class="tieGridRowFour"></button>
				</div>
				<div class="tieGridColThree">
					<button class="tieGridRowOne"></button>
					<button class="tieGridRowTwo"></button>
					<button class="tieGridRowThree"></button>
					<button class="tieGridRowFour"></button>
				</div>
				<div class="tieGridColFour">
					<button class="tieGridRowOne"></button>
					<button class="tieGridRowTwo"></button>
					<button class="tieGridRowThree"></button>
					<button class="tieGridRowFour"></button>
				</div>
			</div>
			<div class="weftColorPick">
				<div class="weftOneColor"></div>
				<div class="weftTwoColor"></div>
				<div class="weftThreeColor"></div>
				<div class="weftFourColor"></div>
				<div class="weftFiveColor"></div>
				<div class="weftSixColor"></div>
				<div class="weftSevenColor"></div>
				<div class="weftEightColor"></div>
				<div class="weftNineColor"></div>
				<div class="weftTenColor"></div>
				
				<p id="pickWeftOneColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft one: <input class="color weftColorInput"onchange="$('.weftOne, .weftOneColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftTwoColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft two: <input class="color weftColorInput" onchange="$('.weftTwo, .weftTwoColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftThreeColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft three: <input class="color weftColorInput"  onchange="$('.weftThree, .weftThreeColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftFourColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft four: <input class="color weftColorInput" onchange="$('.weftFour, .weftFourColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftFiveColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft five: <input class="color weftColorInput" onchange="$('.weftFive, .weftFiveColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftSixColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft six: <input class="color weftColorInput" onchange="$('.weftSix, .weftSixColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftSevenColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft seven: <input class="color weftColorInput"  onchange="$('.weftSeven, .weftSevenColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftEightColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft eight: <input class="color weftColorInput" onchange="$('.weftEight, .weftEightColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftNineColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft nine: <input class="color weftColorInput" onchange="$('.weftNine, .weftNineColor').css('background','#'+this.color);"></input></p>
				<p id="pickWeftTenColor" class="hide pickWeftColors"  id="weftColorGrid" >Click to set weft ten: <input class="color weftColorInput" onchange="$('.weftTen, .weftTenColor').css('background','#'+this.color);"></input></p>
			</div>
			<div class="weftGrid">
				<div class="weftGridColOne">
					<button class="weftGridRowOne"></button>
					<button class="weftGridRowTwo"></button>
					<button class="weftGridRowThree"></button>
					<button class="weftGridRowFour"></button>
					<button class="weftGridRowFive"></button>
					<button class="weftGridRowSix"></button>
					<button class="weftGridRowSeven"></button>
					<button class="weftGridRowEight"></button>
					<button class="weftGridRowNine"></button>
					<button class="weftGridRowTen"></button>
				</div>
				<div class="weftGridColTwo">
					<button class="weftGridRowOne"></button>
					<button class="weftGridRowTwo"></button>
					<button class="weftGridRowThree"></button>
					<button class="weftGridRowFour"></button>
					<button class="weftGridRowFive"></button>
					<button class="weftGridRowSix"></button>
					<button class="weftGridRowSeven"></button>
					<button class="weftGridRowEight"></button>
					<button class="weftGridRowNine"></button>
					<button class="weftGridRowTen"></button>
				</div>
				<div class="weftGridColThree">
					<button class="weftGridRowOne"></button>
					<button class="weftGridRowTwo"></button>
					<button class="weftGridRowThree"></button>
					<button class="weftGridRowFour"></button>
					<button class="weftGridRowFive"></button>
					<button class="weftGridRowSix"></button>
					<button class="weftGridRowSeven"></button>
					<button class="weftGridRowEight"></button>
					<button class="weftGridRowNine"></button>
					<button class="weftGridRowTen"></button>
				</div>
				<div class="weftGridColFour">
					<button class="weftGridRowOne"></button>
					<button class="weftGridRowTwo"></button>
					<button class="weftGridRowThree"></button>
					<button class="weftGridRowFour"></button>
					<button class="weftGridRowFive"></button>
					<button class="weftGridRowSix"></button>
					<button class="weftGridRowSeven"></button>
					<button class="weftGridRowEight"></button>
					<button class="weftGridRowNine"></button>
					<button class="weftGridRowTen"></button>
				</div>
			</div>
				
			<div class="weaveBox">
				<div class="warpOne rowOne"> </div>
				<div class="warpTwo rowOne"></div>
				<div class="warpThree rowOne"></div>
				<div class="warpFour rowOne"></div>
				<div class="warpFive rowOne"></div>
				<div class="warpSix rowOne"></div>
				<div class="warpSeven rowOne"></div>
				<div class="warpEight rowOne"></div>
				<div class="warpNine rowOne"></div>
				<div class="warpTen rowOne" ></div>
			
				<div class="weftOne base" ></div>
				
				<div class="warpOne rowTwo"> </div>
				<div class="warpTwo rowTwo"></div>
				<div class="warpThree rowTwo"></div>
				<div class="warpFour rowTwo"></div>
				<div class="warpFive rowTwo"></div>
				<div class="warpSix rowTwo"></div>
				<div class="warpSeven rowTwo"></div>
				<div class="warpEight rowTwo"></div>
				<div class="warpNine rowTwo"></div>
				<div class="warpTen rowTwo" ></div>
				
				<div class="weftTwo base" ></div>
				
				<div class="warpOne rowThree"> </div>
				<div class="warpTwo rowThree"></div>
				<div class="warpThree rowThree"></div>
				<div class="warpFour rowThree"></div>
				<div class="warpFive rowThree"></div>
				<div class="warpSix rowThree"></div>
				<div class="warpSeven rowThree"></div>
				<div class="warpEight rowThree"></div>
				<div class="warpNine rowThree"></div>
				<div class="warpTen rowThree" ></div>
				
				<div class="weftThree base" ></div>
				
				<div class="warpOne rowFour"> </div>
				<div class="warpTwo rowFour"></div>
				<div class="warpThree rowFour"></div>
				<div class="warpFour rowFour"></div>
				<div class="warpFive rowFour"></div>
				<div class="warpSix rowFour"></div>
				<div class="warpSeven rowFour"></div>
				<div class="warpEight rowFour"></div>
				<div class="warpNine rowFour"></div>
				<div class="warpTen rowFour" ></div>
				
				<div class="weftFour base" ></div>
				
				<div class="warpOne rowFive"> </div>
				<div class="warpTwo rowFive"></div>
				<div class="warpThree rowFive"></div>
				<div class="warpFour rowFive"></div>
				<div class="warpFive rowFive"></div>
				<div class="warpSix rowFive"></div>
				<div class="warpSeven rowFive"></div>
				<div class="warpEight rowFive"></div>
				<div class="warpNine rowFive"></div>
				<div class="warpTen rowFive" ></div>
				
				<div class="weftFive base" ></div>
				
				<div class="warpOne rowSix"> </div>
				<div class="warpTwo rowSix"></div>
				<div class="warpThree rowSix"></div>
				<div class="warpFour rowSix"></div>
				<div class="warpFive rowSix"></div>
				<div class="warpSix rowSix"></div>
				<div class="warpSeven rowSix"></div>
				<div class="warpEight rowSix"></div>
				<div class="warpNine rowSix"></div>
				<div class="warpTen rowSix" ></div>
				
				<div class="weftSix base" ></div>
				
				<div class="warpOne rowSeven"> </div>
				<div class="warpTwo rowSeven"></div>
				<div class="warpThree rowSeven"></div>
				<div class="warpFour rowSeven"></div>
				<div class="warpFive rowSeven"></div>
				<div class="warpSix rowSeven"></div>
				<div class="warpSeven rowSeven"></div>
				<div class="warpEight rowSeven"></div>
				<div class="warpNine rowSeven"></div>
				<div class="warpTen rowSeven" ></div>
				
				<div class="weftSeven base" ></div>
				
				<div class="warpOne rowEight"> </div>
				<div class="warpTwo rowEight"></div>
				<div class="warpThree rowEight"></div>
				<div class="warpFour rowEight"></div>
				<div class="warpFive rowEight"></div>
				<div class="warpSix rowEight"></div>
				<div class="warpSeven rowEight"></div>
				<div class="warpEight rowEight"></div>
				<div class="warpNine rowEight"></div>
				<div class="warpTen rowEight" ></div>
				
				<div class="weftEight base" ></div>
				
				<div class="warpOne rowNine"> </div>
				<div class="warpTwo rowNine"></div>
				<div class="warpThree rowNine"></div>
				<div class="warpFour rowNine"></div>
				<div class="warpFive rowNine"></div>
				<div class="warpSix rowNine"></div>
				<div class="warpSeven rowNine"></div>
				<div class="warpEight rowNine"></div>
				<div class="warpNine rowNine"></div>
				<div class="warpTen rowNine" ></div>
				
				<div class="weftNine base" ></div>
				
				<div class="warpOne rowTen"> </div>
				<div class="warpTwo rowTen"></div>
				<div class="warpThree rowTen"></div>
				<div class="warpFour rowTen"></div>
				<div class="warpFive rowTen"></div>
				<div class="warpSix rowTen"></div>
				<div class="warpSeven rowTen"></div>
				<div class="warpEight rowTen"></div>
				<div class="warpNine rowTen"></div>
				<div class="warpTen rowTen" ></div>
				
				<div class="weftTen base" ></div>
			</div>
		</div>
	</div>
</body>
				
