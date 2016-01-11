<?php


class Test extends Eloquent  {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'test';

	protected $primaryKey = 'id';  //uid_id  订单id号 区别订单号

	public  $timestamps=false; 


	/**
	 * Get the unique identifier for the user.
	 *
	 * @return mixed
	 */
	public function getAuthIdentifier()
	{
		return $this->getKey();
	}

	/**
	 * Get the password for the user.
	 *
	 * @return string
	 */
	public function getAuthPassword()
	{
		return $this->password;
	}

	/**
	 * Get the e-mail address where password reminders are sent.
	 *
	 * @return string
	 */
	public function getReminderEmail()
	{
		return $this->email;
	}


	//定义查询范围

    public function scopePopular($query)

    {

        return $query->where('paid',200);
        
    }

   public function obj_test(){ 

   return $this->where('paid',200)->select('id','username')->get();

   }

   static public function  add_msg(){ 

   self::insert(array('username'=>'add_msg'));

   }

}