<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>lock-page</title>

</head>

<body>

<span id="msg" style="color:red;" ><b>{{$message}}</b></span>
<input type="hidden" id="id" value="{{$id}}" >
<script src="/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript">

    var i=1;


$(function(){ 

    auto_action();

});
                   function auto_action(){ 

                       setTimeout(auto_notice,5000);

                   }
                               function  auto_notice(){ 

                                            var actionUrl = "{{URL::route('auto.page')}}";

                                            var id=$('#id').val();

                                            $.ajax({
                                                type: 'post',
                                                url: actionUrl,
                                                data: 'id=' + id,
                                                cache: false,
                                                success: function(data) {

                                                     setTimeout(auto_notice,5000);

                                                },

                                                error: function(data) {
                                                    
                                                }

                                            });
                  
                                }

</script>
</body>
</html>