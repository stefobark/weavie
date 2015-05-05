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
		
public function printWIF()
	{
	$wif = $_POST['WIF'];
	$tempData = json_decode(str_replace("\\", "", $wif), true);
	$name = getdate();
	$file = './wif/'.$name["0"].'.wif';
	
	file_put_contents($file, "[WIF]\r\n", FILE_APPEND);
	foreach ($tempData["WIF"] as $key => $value) {
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[CONTENTS]\r\n", FILE_APPEND);
	foreach ($tempData["CONTENTS"] as $key => $value) {
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[WEAVING]\r\n", FILE_APPEND);
	foreach ($tempData["WEAVING"] as $key => $value) {
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[COLOR PALETTE]\r\n", FILE_APPEND);
	foreach ($tempData["COLOR PALETTE"] as $key => $value) {
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[COLOR TABLE]\r\n", FILE_APPEND);
	foreach ($tempData["COLOR TABLE"] as $key => $value) {
	$key = $key + 1;
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[WARP]\r\n", FILE_APPEND);
	foreach ($tempData["WARP"] as $key => $value) {
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[WEFT]\r\n", FILE_APPEND);
	foreach ($tempData["WEFT"] as $key => $value) {
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[TIEUP]\r\n", FILE_APPEND);
	foreach ($tempData["TIEUP"] as $key => $value) {
	$key = intval($key);
	
	$key = $key + 1;
		$writeIt = $key.'=';
	for($i = 0; $i < count($value);){
		$value[$i] = intval($value[$i]) + 1;
		if($i == 0){
			$writeIt .= $value[$i];
		} else {
			$writeIt .= ','.$value[$i];
			}
			$i++;
		}	
		$writeIt .= "\r\n";
		
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[THREADING]\r\n", FILE_APPEND);
	foreach ($tempData["THREADING"] as $key => $value) {
	$key = intval($key);
	$value = intval($value);
	$key = $key + 1;
	$value = $value + 1;
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[TREADLING]\r\n", FILE_APPEND);
	foreach ($tempData["TREADLING"] as $key => $value) {
	$key = intval($key);
	$value = intval($value);
	$key = $key + 1;
	$value = $value + 1;
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[WARP COLORS]\r\n", FILE_APPEND);
	foreach ($tempData["WARP COLORS"] as $key => $value) {
	$key = intval($key);
	$value = intval($value);
	$key = $key + 1;
	$value = $value + 1;
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
	file_put_contents($file, "[WEFT COLORS]\r\n", FILE_APPEND);
	foreach ($tempData["WEFT COLORS"] as $key => $value) {
	$key = intval($key);
	$value = intval($value);
	$key = $key + 1;
	$value = $value + 1;
	$writeIt = $key.'='.$value."\r\n";
	file_put_contents($file, $writeIt, FILE_APPEND);
	}
	file_put_contents($file, "\r\n", FILE_APPEND);
	
		return Response::download($file);
	}

}
