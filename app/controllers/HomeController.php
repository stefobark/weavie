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
		
		$name = getdate();
		$imagename = $name["0"];
		 
		//Get the base-64 string from data
		$filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);
		 
		//Decode the string
		$unencodedData=base64_decode($filteredData);

		
		//if($i[0] == 0){
		//	$imagename = 0;
		//} else {
		//	$imageName == $imageName + 1;
		//}
		$filePath = './img/patterns/'.$imagename.'.png';
		//Save the image
		file_put_contents($filePath, $unencodedData);
	
 		$headers = array( 'Content-Type' => 'image/png' );
		return  $filePath;
		}

public function downloadPNG()
	{
	$filePath = $_GET['filePath'];
	}
	
public function printWIF()
	{
	$wif = $_POST['WIF'];
	$tempData = json_decode(str_replace("\\", "", $wif), true);
	$name = getdate();
	$file = './wif/'.$name["0"].'.wif';
	
	file_put_contents($file, "[WIF]\n", FILE_APPEND);
	foreach ($tempData["WIF"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[CONTENTS]\n", FILE_APPEND);
	foreach ($tempData["CONTENTS"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[WEAVING]\n", FILE_APPEND);
	foreach ($tempData["WEAVING"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[COLOR PALETTE]\n", FILE_APPEND);
	foreach ($tempData["COLOR PALETTE"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[COLOR TABLE]\n", FILE_APPEND);
	foreach ($tempData["COLOR TABLE"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[WARP]\n", FILE_APPEND);
	foreach ($tempData["WARP"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[WEFT]\n", FILE_APPEND);
	foreach ($tempData["WEFT"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[TIEUP]\n", FILE_APPEND);
	foreach ($tempData["TIEUP"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[THREADING]\n", FILE_APPEND);
	foreach ($tempData["THREADING"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[TREADLING]\n", FILE_APPEND);
	foreach ($tempData["TREADLING"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[WARP COLORS]\n", FILE_APPEND);
	foreach ($tempData["WARP COLORS"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
	file_put_contents($file, "[WEFT COLORS]\n", FILE_APPEND);
	foreach ($tempData["WEFT COLORS"] as $key => $value) {
	$writeIt = '"'.$key.'":"'.$value.'"'."\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	
		return Response::download($file);
	}

}
