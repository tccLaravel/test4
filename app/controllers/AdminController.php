<?php
//SMT SHOP��̨������������
class AdminController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */

    public function  __construct(){ 

    View::share('value','value1');

    } 

	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);


		}

	}



}