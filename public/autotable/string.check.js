/**
 *   string/number/etc.  checking 
 *   @param from  jQuery validate  simple 
 *   @return boolean
 */
jQuery.string = {

        //必须
		required: function(value) {

			return $.trim(value).length > 0;
		},

        //Email
		email: function(value) {

			return  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

        //url
		url: function(value) {

			return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

        //必须输入正确格式的日期
		date: function( value) {
			return  !/Invalid|NaN/.test(new Date(value).toString());
		},

        //必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式，不验证有效性
		dateISO: function( value) {
			return  /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

        //必须输入合法的数字(负数，小数)
		number: function(value) {
			return  /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

        //正数
		positivenumber:function(value){ 

           return  /^(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);

		},

        //必须输入整数
		digits: function( value) {
			return  /^\d+$/.test(value);
		},

        //必须输入合法的信用卡号
		creditcard: function(value) {

			if ( /[^0-9 \-]+/.test(value) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

        //最小长度
		minlength: function( value,param) {

			var length = $.isArray( value ) ? value.length :($.trim(value).length);
			return  length >= param;
		},

        //最大长度
		maxlength: function( value,param ) {

			var length = $.isArray( value ) ? value.length : ($.trim(value).length);
			return  length <= param;
		},

        //长度范围
		rangelength: function( value,param ) {

			var length = $.isArray( value ) ? value.length :($.trim(value).length);
			return ( length >= param[0] && length <= param[1] );
		},

        //值最小为多少
		min: function( value,param ) {
			return  value >= param;
		},

        //值最大为多少
		max: function( value,param ) {
			return value <= param;
		},

        //输入值范围
		range: function( value,param) {

			return  ( value >= param[0] && value <= param[1] );
		},

}

/**
 *    外部调用函数
 *    @param string 待检查信息
 *    @param rules  规则  数组 
 *    @return boolean 
 */

 function  jq_string_check(string,rules,param){ 

    //记录全局判断状态值

    var global_arr=new Array();

    //规则不是数组

    if(!$.isArray(rules))

     return false;

    for(value in rules){ 

        switch(rules[value])
		{

 			case 'required':

               global_arr.push($.string.required(string));

				break;           

			case 'email':

               global_arr.push($.string.email(string));

				break;

			case 'url':

               global_arr.push($.string.url(string));

				break;
			case 'date':

               global_arr.push($.string.date(string));

				break;		
			case 'dateISO':

               global_arr.push($.string.dateISO(string));

				break;		
			case 'number':

               global_arr.push($.string.number(string));

				break;	
			case 'positivenumber':

               global_arr.push($.string.positivenumber(string));

				break;	
			case 'digits':

               global_arr.push($.string.digits(string));

				break;									
			case 'creditcard':

               global_arr.push($.string.creditcard(string));

				break;		
			case 'minlength':

			   if(param==undefined)

			   global_arr.push(false);

               global_arr.push($.string.minlength(string,param));

				break;		
			case 'maxlength':

			   if(param==undefined)

			   global_arr.push(false);

               global_arr.push($.string.maxlength(string,param));

				break;			
			case 'rangelength':

			   if(param==undefined)

			   global_arr.push(false);

			   if(!$.isArray(param))

			   global_arr.push(false);

               global_arr.push($.string.rangelength(string,param));

				break;		
			case 'min':

			   if(param==undefined)

	           global_arr.push(false);

               global_arr.push($.string.min(string,param));

				break;			
			case 'max':

			   if(param==undefined)

			   global_arr.push(false);

               global_arr.push($.string.max(string,param));

				break;		
			//取值范围   param is array
			case 'range':

			   if(param==undefined)

			   global_arr.push(false);

			   if(!$.isArray(param))

			   global_arr.push(false);

               global_arr.push($.string.range(string,param));

				break;	

		   default:

		     global_arr.push(false);

		   break;	
    }

 }

    var tag=true;

    for( x in global_arr){ 

      if(global_arr[x]==false)

      	tag=false;

    }

    if(tag)  return true;

    else     return false;

}

/**
 *   保留小数 默认2位 四舍五入保留
 *   @param value  要处理的值
 *   @param 预保留的小数位数 0-20 
 *   @return value
 */

  function value_to_decimal(value,num){ 

   if(num==undefined)

   	  num=2;

   if(!is_number(value))

   	 value=0.00;

   var vars=new Number(value);

   vars=vars.toFixed(num);

   if(!is_number(vars))

   vars='0.00';

   return vars;

 }

 /**
  *   取整数
  *   @param  value
  *   @param  type  类型  1 正数 2 均可 默认为正数
  *   @return value
  */

 function value_to_integer(value,type){ 

    if(type==undefined)

    type=1;

    if(!is_number(value))

    value=0;

    var vars=Math.ceil(value);

    if(!is_number(vars))

    vars='0';

    return vars;

}

/**
 *  判断是否为数字
 *  @param value 预处理的值
 *  @return boolean
 */

 function is_number(value){ 

 value=parseInt(value);  //针对字符串数字进行转换

 return value=== +value;

 }