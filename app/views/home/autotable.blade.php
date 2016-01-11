<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf8" />
</head>
<script type="text/javascript" src="/autotable/jquery-1.8.3.min.js" ></script>
<link rel="stylesheet" type="text/css" href="/autotable/css/css/bootstrap.min.css">
<style type="text/css">
	
.content-center tr td { 

text-align: center;

}

.input_width{ 

width:50px;

}

.single_label{ 

margin-right: 10px;

}

.input_color_style{ 

 display:inline-block; 
 width:10px;
 height:10px;

}

</style>
<body>

<div id="checkbox_content" >
</div>
<div style="width:80%;" >
<table class="table table-hover table-bordered content-center " id="table" >
</table>
</div>
<div id="value_show" >
</div>
<input type="text" onfocus="this.blur();" />
<script type="text/javascript" src="/autotable/autotable.js" ></script>
<script type="text/javascript">
 
$(function(){ 

autotable_init({{$autotable}},'checkbox_content');

});

</script>
</body>
</html>
