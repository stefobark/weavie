##Weavie##
Visualizing the weave draft.

####What's a weave draft?####
A "Weave Draft" is a system of grids that describes how to set up a loom. [This page describes it well](http://www.weaverscraft.com/hints.html).

#####The layout#####
There are three grids on a weave draft.

1. The grid on the top-left of a weave draft tells the weaver to attach warp threads to harnesses. 
2. The grid on the top-right tells the weaver to attach the harnesses to treadles. It describes the various combinations of harnesses that will be lifted throughout the weave.
3. The grid on the right tells the weaver when to use which treadle. It describes which warps should be lifted at each pass of the shuttle.

###Weavie: what is it and how does it work?###
Weavie is a weave draft maker. It, like a weave draft, is split into three grids (`.hGrid`, `.tieUp`, and  `.treadleGrid`). Then Weavie has a `.weaveBox` that displays the pattern described by the selection of buttons on the three grids. 

The three important files at this point are `/public/js/try.js`, `/public/css/tweaks2.css` and `/app/views/try.php`. Weavie is a Laravel project. In the future, I'll add the ability to save patterns and maybe a user management system.. so there will be more database interactions and Laravel will help. But, right now, there's no big reason for it.

Instead of trying to blurt everything out at once, let's just walk through what happens when users make weave patterns with Weavie. And, it's even easier to understand my rambling if you take a look at Weavie in action [here](http://weavie.techgno.com).

####`.hGrid`: attach warps to harnesses####

Clicking the top right grid (`.hGrid`), which is read from right to left, will add the corresponding `.harness***` class to all elements with the corresponding `warp***` class (i.e., `.warp1`, `.warp2`, etc..) within the `.weaveBox`. For example, clicking the bottom button (`.hGridRow3`) on the far right column (`.hGridCol1`) of `.hGrid` will add the `.harness0` class to the divs within `.weaveBox` that have the `.warp1` class.

For example, here's what happens when you click a button within the `.hGrid`.
```javascript
  $(".hGridRow3").click(function(){
    			//because there are as many .hGrid columns as there are .warp*s, by getting the id of 'this' button's parent, we find the corresponding warp that clicking this button relates to.
			var parent = $(this).parent().attr('id');
			//remove the dark grey from previously selected buttons
			$(this).siblings().removeClass('activeButton');
			//make the button grey
			$(this).addClass("activeButton");
			//use parent's ID to remove all previously selected harnesses
			$('.warp' + parent).alterClass("harness*");
			//use parent's ID to attach the harness to the thread
			$('.warp' + parent).addClass('harness0');
		});
```
		
####`.tieUp`: attach harnesses to treadles####

The Tie Up Grid is the next step in the weave drafting process. With Weavie's `.tieUp` box, when you click a button, the corresponding `.treadle***` class is added to all elements within the `.weaveBox` that have the corresponding `.harness***` class. For example, clicking the bottom left button (`.tie0 > .tRow3`) will add `.treadle0` to all elements within `.weaveBox` with `.harness0`.

```javascript
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
```
We use the parent of the tie button, which is the row, to find the corresponding treadle. So, for example: clicking the `.tie0 > .tRow3` button will take the parent `.tie0` and get rid of all non-numeric characters, leaving us with '0'. Then, we can just add that to the end of 'treadle' and we're ready to add the appropriate treadle class to all elements with the appropriate harness class. The same kind of thing happens when we go to find the appropriate harness, except we just use `this` because the row number of whatever button that was clicked will correspond to the harness number. 

####`.treadleGrid`: activate pattern / push treadle####

And, the pattern repeats... When we click a button within the `.treadleGrid` (the grid to the right of the `.weaveBox`), all of which have the `.treadlePush` class, we get the classes of `this` element and split them by ' ' (space), then we take the second class (`findTreadle[1]`) and remove all non-numeric characters. Now we know which treadle to add (because the columns in this grid correspond to the treadles that were added in the `.tieUp` grid). 

Now, we need to know which `.pass***` we're on. Each `.pass***` represents 'passing' the shuttle through the warps. To find the pass, we take the id of `this` element's parent (the parent of `this` is the row, which aligns with the pass) and remove all non-numeric characters.

###That's pretty much it###
Except for:
* We're using [spectrum](https://bgrins.github.io/spectrum/) to handle the color picking. It's sweet.
* When we click on a grid, the button we click on is turned grey and all of its siblings get their background color removed. Like: 
```javascript 
$(this).css("background", "grey");
$(this).siblings().css("background", "");
```
* And, like I mentioned.. we're using Laravel. So, in the future, it will be easy to expand the project (save patterns, create a user system, etc...)

