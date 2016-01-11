<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
<title>微务通-微信商务管理平台</title>
<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/gmu.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<style>
.gmu-media-detect {
	-webkit-transition: width 0.001ms;
	width: 0;
	position: absolute;
	top: -10000px;
}
@media screen and (width: 320px) {
#gmu-media-detect0 {
	width: 1px;
}
}
</style>
</head>

<body>
<div id="page">
  <div id="header"> <a href="index"></a> 众向传媒 <a id="menu-btn" href="javascript:;" class="menu right"></a> </div>
  <section id="content">
    <div class="banner">
      <div id="slider" class="swipe" style="visibility: visible;">
        <ul class="swipe-wrap" style="width: 1280px;">
          <li data-index="0" style="width: 320px; left: 0px; transition: 0ms; -webkit-transition: 0ms; -webkit-transform: translate(320px, 0px) translateZ(0px);"><a href="contact"><img src="img/banner1.jpg"></a></li>
          <li data-index="1" style="width: 320px; left: -320px; transition: 300ms; -webkit-transition: 300ms; -webkit-transform: translate(-320px, 0px) translateZ(0px);"><a href="contact"><img src="img/banner2.jpg"></a></li>
          <li data-index="2" style="width: 320px; left: -640px; transition: 300ms; -webkit-transition: 300ms; -webkit-transform: translate(-320px, 0px) translateZ(0px);"><a href="contact"><img src="img/banner1.jpg"></a></li>
          <li data-index="3" style="width: 320px; left: -960px; transition: 300ms; -webkit-transition: 300ms; -webkit-transform: translate(0px, 0px) translateZ(0px);"><a href="contact"><img src="img/banner2.jpg"></a></li>
        </ul>
      </div>
      <div id="slider_on">
        <ul>
          <li class=" "></li>
          <li class=" "></li>
          <li class=" "></li>
          <li class="on"></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="row row-show">
        <div class="span2 module-bg1 md1 mdp1"> <a href="artic">
          <h2 class="inner">功能介绍</h2>
          </a> </div>
        <div class="span1 module-bg6 pos3 md2 mdp2"> <a href="artic">
          <h2 class="inner">行业观察</h2>
          </a> </div>
      </div>
      <div class="row row-show">
        <div class="span1 module-bg2 md3 mdp2"> <a href="artic">
          <h2 class="inner">案例解读</h2>
          </a> </div>
        <div class="span1 pos2 module-bg3 md4 mdp2"> <a href="with">
          <h2 class="inner">加盟合作</h2>
          </a> </div>
        <div class="span1 pos3 module-bg4 md5 mdp2"> <a href="artic">
          <h2 class="inner">服务项目</h2>
          </a> </div>
      </div>
      <div class="row row-show">
        <div class="span1 module-bg5 md6 mdp2"> <a href="artic">
          <h2 class="inner">在线调查</h2>
          </a> </div>
        <div class="span2 pos2 module-bg6 md7 mdp1"> <a href="artic">
          <h2 class="inner">互动活动</h2>
          </a> </div>
      </div>
      <div class="row row-show mb0">
        <div class="span2 module-bg7 md8 mdp1"> <a href="contact">
          <h2 class="inner">联系我们</h2>
          </a> </div>
        <div class="span1 pos3 module-bg1 md9 mdp2"> <a href="artic">
          <h2 class="inner">便民服务</h2>
          </a> </div>
      </div>
    </div>
  </section>
  <script type="text/javascript">
window.onload = function(){
var slider = Swipe(document.getElementById('slider'), {
auto: 3000,
continuous: true,
callback: function(pos) {      
  var i = bullets.length;
  while (i--) {
bullets[i].className = ' ';
  }
  bullets[pos].className = 'on';
  }
  });
  var bullets = document.getElementById('slider_on').getElementsByTagName('li');	
};
</script>
  <footer> <a href=""><small>微务通 提供技术支持</small></a> </footer>
  
  <div class="panel ui-panel ui-panel-push ui-panel-right ui-panel-animate" style="-webkit-transform: translate3d(203px, 0px, 0px);">
    <nav id="menu-right" class="mmenu">
      <form method="get" action="">
        <div class="mmenu-search"><span></span>
          <input placeholder="搜索" type="text" autocomplete="off" name="keyword">
        </div>
      </form>
     @include('m_layout.header')
    </nav>
  </div>
</div>
<script src="js/zepto.js"></script> 
<script src="js/gmu.js"></script> 
<script src="js/swipe.js"></script> 
<script src="js/main.js"></script>
<div class="ui-panel-dismiss" style="width: 117px; left: auto; right: 203px; height: 655px; display: none;"></div>
<div style="display:none"></div>
</body>
</html>