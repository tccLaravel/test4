/**
 *  生成sku表格
 *  @author json
 *  @time   2016-1-6 11:06:52
 *  @version 1.0
 */

var checkbox_total=[];     //记录选中的checkbox值 通过下标和二位数组的方式记录
var combination_data=[];   //记录最新组合值组
var chose_attribute=[];    //记录选中的属性 计算表头
var attributenumber_data=[]; //记录已设置的数量值
var attributeprice_data=[];  //记录已设置的价格值

var checkbox_value_obj=[];

/** 
 *  @param checkbox_value 初始数据
 *  @param id_content     操作id
 */

function autotable_init(checkbox_value,id_content){ 

var start=0;

for(var j in checkbox_value){ 

number_value=checkbox_value[j];

var attribute_name=number_value[0]['name'];
var attribute_name_id=number_value[0]['id'];

checkbox_value_obj[attribute_name]=start;

number_value=number_value[1];

$('#'+id_content).append('<div class="table_label" id=labelids'+start+' ></div><div style="clear:both;" ></div>');

$('#labelids'+start).append('<label>'+attribute_name+'：</label>');

for(var i in number_value){ 

//判断是否选中

var checked=number_value[i]['is_checked']?'checked':'';

//判断是否为颜色属性

if(attribute_name_id==1){ 

var color_value=number_value[i]['attribute_name'].split(".");

$('#labelids'+start).append('<label class="single_label" ><input type="checkbox" name="saleattribute['+attribute_name_id+']['+number_value[i]['attribute_value_id']+']" value="'+number_value[i]['attribute_value_id']+'" \
 onchange="checkboxOnChange(this,\''+attribute_name+'\','+attribute_name_id+');add_table_color(this);" '+checked+' ><span>'+'<span class="input_color_style" style="background-color:'+color_value[0]+'" ></span>'+color_value[1]+'</span></label>');

}

else 

$('#labelids'+start).append('<label class="single_label" ><input type="checkbox" name="saleattribute['+attribute_name_id+']['+number_value[i]['attribute_value_id']+']" value="'+number_value[i]['attribute_value_id']+'" \
 onchange="checkboxOnChange(this,\''+attribute_name+'\','+attribute_name_id+')" '+checked+' ><span>'+number_value[i]['attribute_name']+'</span></label>');

}

start++;

}

}

/**
 *  监测checkbox状态
 *  @param obj  当前变化对象
 *  @param type 数据类型
 *  @return void
 */

function checkboxOnChange(obj,type,nameid){ 

$('#table').css('display','');

combination_data=[];  //清空当前sku组合值

//combination_data_str='';

chose_attribute=[];

$('#table').html(''); //清空当前表格

if(checkbox_total[checkbox_value_obj[type]]==undefined)

checkbox_total[checkbox_value_obj[type]]=[];

if(checkbox_total[checkbox_value_obj[type]]['chose_number']==undefined)

checkbox_total[checkbox_value_obj[type]]['chose_number']=0;

checkbox_total[checkbox_value_obj[type]][$(obj).val()]={ 

'is_checked':obj.checked,
'parentid':nameid,
'type':type,
'value':$(obj).parent().children("span").html()

};

//记录选中的个数

if(obj.checked)

checkbox_total[checkbox_value_obj[type]]['chose_number']+=1;

else

checkbox_total[checkbox_value_obj[type]]['chose_number']-=1;


combination_full_data(checkbox_total,0,checkbox_total.length,'');

redraw_table();

//$('#value_show').html(combination_data_str);

}

/**
 *   计算当前组合数据信息
 *   @param data_arr 数据源
 *   @param tag      记录当前循环位置
 *   @param total    总的数据条数
 *   @param this_combination 记录当前组合值
 */

 function combination_full_data(data_arr,tag,total,this_combination){ 

 if(tag<total){ 

 if(data_arr[tag]!=undefined&&data_arr[tag]['chose_number']!=undefined&&data_arr[tag]['chose_number']>0){

 for(var i in data_arr[tag]){ 

  if(i!='chose_number'&&data_arr[tag][i]['is_checked']){ 

  chose_attribute[data_arr[tag][i]['type']]=1;

  combination_full_data(data_arr,tag+1,total,this_combination+data_arr[tag][i]['parentid']+'*'+i+'%'+data_arr[tag][i]['value']+'^');

 }

 }

 }

 else { 

 combination_full_data(data_arr,tag+1,total,this_combination);

 }

 }

 else { 

 if(this_combination!=''){ 

 //combination_data_str+=this_combination+'<br/>';
 
 combination_data.push(this_combination);

 }

 }

 }

 /**
  *   监测input 记录写好的number price
  *   @param obj
  *   @param type
  */

 function ListenInputChange(obj,type){ 

 if(type=='number')

 attributenumber_data[$(obj).attr('attr_data')]=$(obj).val();

 else attributeprice_data[$(obj).attr('attr_data')]=$(obj).val();

 }

 /**
  *  重新绘制表格
  */

 function redraw_table(){ 

 if(combination_data.length>0){ 

 //处理字符串 并计算表头信息

 var str='<tr>';

 for(var k in chose_attribute){ 

 str+='<td>'+k+'</td>';

 }

 str+='<td class="input_width">数量</td><td class="input_width" >价格</td>';

 str+='</tr>';

 //end 表头信息

 $('#table').append(str);

 for(var i in combination_data){ 

 str='<tr>';

 var name_value_attribute_msg=[];
 var name_value_msg=[];

 var table_arr=combination_data[i].split("^");

 for(var j in table_arr){ 

 if(table_arr[j]!=''){ 

 var table_arr_single=table_arr[j].split("%");

 name_value_attribute_msg.push(table_arr_single[0]);

 name_value_msg.push(table_arr_single[1]);

 }

 }

 for(var k in name_value_msg){ 

 str+='<td>'+name_value_msg[k]+'</td>';

 }

 name_value_attribute_msg=name_value_attribute_msg.join("/");

 name_value_attribute_msg="/"+name_value_attribute_msg;

 var old_number='',old_price='';

 if(attributenumber_data[name_value_attribute_msg]!=undefined) old_number=attributenumber_data[name_value_attribute_msg];

 if(attributeprice_data[name_value_attribute_msg]!=undefined)  old_price=attributeprice_data[name_value_attribute_msg];

 str+='<td><input type="text" onfocus="goodsNumberOnFocus(this);" attr_old_value="0" onblur="goodsNumberOnBlur(this);" value="'+old_number+'" attr_data="'+name_value_attribute_msg+'" name="attributenumber['+name_value_attribute_msg+']" >\
 </td><td><input type="text" onblur="goodsPriceOnBlur(this);" value="'+old_price+'" attr_data="'+name_value_attribute_msg+'" name="attributeprice['+name_value_attribute_msg+']" ></td></tr>';

 $('#table').append(str);

 }

 }

 else { 

 $('#table').css('display','none');
 
 console.log("empty data");

 }

 }