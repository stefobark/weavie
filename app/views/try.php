<html>
   <head>
   	<meta charset="UTF-8">
		<meta name="description" content="Free online weave drafting software.">
		<meta name="keywords" content="weaving, weave draft, arts, crafts, weave, weaver, fiber">
		<meta name="author" content="Steven Barker">
      <link href="/css/tweaks2.css" rel="stylesheet">
      <link href="/css/bootstrap.min.css" rel="stylesheet">
      <script src="/js/jquery-2.1.1.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/jquery.alterclass.js"></script>
      <script src='/js/spectrum.js'></script>
      <link rel='stylesheet' href='/css/spectrum.css' />
      <script type="text/javascript" src="/js/jquery.func_toggle.js"></script>
      <script type='text/javascript' src='/js/htmlToCanvas.js'></script>
      <script type="text/javascript" src="/js/jquery.plugin.html2canvas.js"></script>
      <script type="text/javascript" src="/js/fileDownload.js"></script>
      <script src="/js/prettyJSON.js"></script>
      <script src="/js/generateHTML.js"></script>
   </head>
   <body>
		
	</form>
      <div style="position:fixed; top:10px; left:40px;">
         <img src="/img/logo.png" style="position:fixed; width:100px; top:20px; left:20px;">
      </div>
      <div class="introBox" style="border-radius:20px;">
      	<div class="text-center" style="margin-top:-20px;">
      		<img src="/img/intro.png" style="margin-top:40px; height:400px; width:auto;">
      	</div>
      </div>
      <div style="background:white; border-radius: 20px; width:30%; padding:20px; position:fixed; top:520px; left: 35%;">
      	<p>Weavie is free online weave drafting software that allows users to: 
      		<ul>
      			<li>Visualize weave patterns.</li>
      			<li>Save images of drafts.</li>
      			<li>Save drafts to WIF files (so you can use more advanced features provided by other weave drafting software).</li>
      			<li>Check the maximum number of floats (the number of threads that any given thread 'floats' over) produced by the draft.</li>
      		</ul>
      	<br>
      	Email steven.j.barker.jr (at) gmail (dot) com (or tweet to <a href="https://twitter.com/steven_barker">@steven_barker</a>) if you have questions, comments or suggestions. 
      	</p>
      </div>
      <div id="wifDiv" style="position:fixed; top:10px; right:150px;">
      </div>
      <div class="container">
      <div class="row">
      <div class="col-md-12" >
      <div class="choose" style="position: fixed; top: 150px; left:80px; width: 400px; background: white; border-radius:20px; padding:10px; -webkit-box-shadow: 2px 10px 20px 0px rgba(0,0,0,0.75); -moz-box-shadow: 2px 10px 20px 0px rgba(0,0,0,0.75); box-shadow: 2px 10px 20px 0px rgba(0,0,0,0.75);">
         <h3 class="text-center"><img src="/img/started.png" ></h3>
         <br>
         <p class="help-block"><img src="/img/warps.png" style="height:30px; width:auto;">
         </p>
         <input type="text" class="warpNum" value="50"><br>
         <p class="help-block"><img src="/img/wefts.png" style="height:30px; width:auto;"></p>
         <input type="text" class="weftNum" style="margin-left:1px" value="50"><br>
         <p class="help-block"><img src="/img/treadles.png" style="height:30px; width:auto;"></p>
         <input type="text" class="treadleNum" style="margin-left:1px" value="14"><br>
         <p class="help-block"><img src="/img/harnesses.png" style="height:25px; width:auto;"></p>
         <input type="text" class="harnessNum" style="margin-left:1px" value="4"><br><br>
         <button class="submit ">Go</button>
      </div>
   </body>
