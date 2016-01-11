<?php

class HomeController extends AdminController {

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

	public function url(){ 

    echo 'success';

	}

	// lock test 
  
    public function lock(){ 

     $result=Test::where('id',20)->first();

     if(empty($result)) echo 'no';

     print_r($result);

    }

   public function obj(){ 

       $condition=array('大柚子','大柚','柚子');

       // $result=Test::all()->toArray();

       // print_r(DB::getQueryLog());

       $obj=new Test;
       $i = 0;

        print_r($obj);

       foreach ($condition as $value) {
            $i++;
           echo $value;


           $total=$obj->where(function($query) use ($value){ 

               $q =   $query->where('id',$value);

               //$q = $q->orWhere('content',$value);

               return $q;

           })->count();

            print_r(DB::getQueryLog());

      
       }

   }

   public function getChild($id,$str,$tag){ 

     $result=Test::where('password',$id)->select('username','password')->get()->toArray();

     if(empty($result)) return $str;

     else { 

     foreach ($result as $key => $value) {
       
       $str.="<option value='".$value['username']."'>".$tag.$value['username']."</option>";

       $str=$this->getChild($value['username'],$str,$tag.'&nbsp;');

     }

      return $str;

   }

   }


  public function page(){ 

   // DB::beginTransaction();

   // $result=Test::insert(array( 

   // 'username'=>'事务',
   // 'password'=>'事务2',
   // 'paid'=>1000

   // ));

   // DB::rollback();

   // print_r(Test::find(12)->toArray());

   $result=Test::where('paid',5000)->get();

   //print_r($result);

   foreach ($result as $value) {
  
    $value->paid=10000;
    $value->save();   

   }



  }

 /**
  *   定时通知
  */

 public function auto_ajax(){ 

      $lock_class=new Lock;

      $id=Input::get('id');

      $lock_class->add_time($id,60);

      return array('status'=>true);

 }

public function autotable(){ 

 $arr=array( 

 array(
 
 array('name'=>'颜色','id'=>1),
 array(
 array('attribute_value_id'=>1,'attribute_name'=>'#ccc.灰色','is_checked'=>0),
 array('attribute_value_id'=>2,'attribute_name'=>'#333.黑色','is_checked'=>0),
 array('attribute_value_id'=>3,'attribute_name'=>'red.红色','is_checked'=>0)

  )
  ),

 array(

  array('name'=>'尺寸','id'=>2),
  array(

  array('attribute_value_id'=>4,'attribute_name'=>'XL','is_checked'=>0),
  array('attribute_value_id'=>5,'attribute_name'=>'XXL','is_checked'=>0),
  array('attribute_value_id'=>6,'attribute_name'=>'XXXL','is_checked'=>0)

  )

  ),

 array(
 array('name'=>'其它','id'=>3),
 array(
 array('attribute_value_id'=>7,'attribute_name'=>'img1','is_checked'=>0),
 array('attribute_value_id'=>8,'attribute_name'=>'img2','is_checked'=>0),
 array('attribute_value_id'=>9,'attribute_name'=>'img3','is_checked'=>0)
  )
  
  )
 
 );

 $return=array('autotable'=>json_encode($arr));

 return View::make('home.autotable',$return);

 }

 }