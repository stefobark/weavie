<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		return View::make('hello');
	}
	
	public function displayPNG()
	{
		//save.php code
		 
		 
		//Get the base-64 string from data
		$filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);
		 
		//Decode the string
		$unencodedData=base64_decode($filteredData);
	
		$images = scandir('./img/patterns/');
	
		foreach($images as $image){
		$image = preg_replace("/[^0-9,.]/", "", $image);
			$imagename = $image + 1;
			
			} 
		
		//if($i[0] == 0){
		//	$imagename = 0;
		//} else {
		//	$imageName == $imageName + 1;
		//}
		$filePath = './img/patterns/'.$imagename.'.png';
		//Save the image
		file_put_contents($filePath, $unencodedData);
	

		return View::make('displayPng', array('PNG' => $filePath));
		}

public function downloadPNG()
	{
	$filePath = $_GET['filePath'];
	return Response::download($filePath);
	}

}
