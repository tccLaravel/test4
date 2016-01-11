<?php


class Lock extends Eloquent  {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'lock';

	protected $primaryKey = 'contentid';  //uid_id  订单id号 区别订单号

	public  $timestamps=false; 


    /**
     *   初始化操作
     */

    public function  init_data($contentid){ 

    
       $this->check_data();

       return $this->lock_check($contentid);
  

    }

	/**
	 *    生成新锁信息
	 */

    public function  add_data($user_id,$contentid,$time){ 


        $this->insert(array( 

            'user_id'=>$user_id,
            'contentid'=>$contentid,
            'time'=>$time

        	));
    }

    /**
     *   删除数据
     */

   public function del_data($contentid){ 


         $result=$this->find($contentid);

         if(!empty($result))

         	$result->delete();

   }

   /**
    *    监测是否过期 删除对用过期信息
    */

   public function check_data(){ 


       $result=Lock::all()->toArray();
 
       if(!empty($result)){ 

       	  $nowtime=time();

        foreach ($result as $key => $value) {
        	
             if($value['time']<=$nowtime)

             	$this->del_data[$value['contentid']];

        }
 

       }


   }

   /**
    *   添加操作时间
    */

   public function add_time($contentid,$time){ 

       $result=$this->find($contentid);

       if(!empty($result)){ 

          $result->time+=$time;

          $result->save();

       }

   }

   /**
    *   监测是否存在 锁信息
    */

  public function lock_check($contentid){ 

     $result=$this->find($contentid);

     if(empty($result))

     	return true;

     else{ 
         
       return false;

     }
  
  }

}