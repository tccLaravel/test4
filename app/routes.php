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

Route::any('test',function(){ 

  echo public_path();

});
Route::any('/',function(){ 

  echo 'test';

});

Route::any('url',array('as'=>'url','uses'=>'HomeController@url'));
Route::any('lock',array('as'=>'lock','uses'=>'HomeController@lock'));
Route::any('obj',array('as'=>'obj','uses'=>'HomeController@obj'));

//测试页面
Route::any('page',array('as'=>'page','uses'=>'HomeController@page'));
//ajax实时效应
Route::any('auto/ajax',array('as'=>'auto.page','uses'=>'HomeController@auto_ajax'));

Route::any('order/auto/add',function(){ 

DB::beginTransaction();

//result=DB::select('call order_auto_add(1)');

$id=Seq::insertGetId(array('timestr'=>date('Ymd',time())));

Test::insert(array('username'=>'2'.$id.'3678','password'=>date('Y-m-d H:i:s',time()),'paid'=>'100'));

DB::commit();

});

Route::any('ueditor/index',function(){ 

return View::make('ueditor.index');

});

Route::any('autotables',array('as'=>'autotable','uses'=>'HomeController@autotable'));
Route::any('autotablesstr',array('as'=>'autotablesstr','uses'=>'HomeController@getAutoTableStr'));











