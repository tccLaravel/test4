<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::filter('https_redirect',function(){ 

if($_SERVER['REQUEST_SCHEME']!='http'){ 

header("Location:http://www.baidu.com");

}

});

Route::filter('filter_test',function(){});

Route::group(array('before'=>'https_redirect'),function(){ 

Route::any('roget/test',function(){ 

echo 'roget.test';

});

Route::group(array('before'=>'filter_test'),function(){ 

Route::any('roget/test/index','RogetController@index');

Route::any('roget/test1',function(){ 

return 'roget.test1';

});

});

});










