var w_width = $(window).width();
var w_height = $(window).height();

$(document).ready(function(){
	
	/*$(window).resize(function(){
		w_width = $(window).width();
		w_height = $(window).height();
	});*/
		
	// set overflow position
	set_position();
	
	// loading page
	loading();
	
	// login page
	login();
	fb_click();
	gg_click();	
	
	// main page
  main_building_click();
  main_forest_click();
  main_tree_click();
  main_setting_click();

	// acheievment page
	// sun_back_click();
	// achievement_click();
	
	// setting page
	set_back_click();
	toggle_switch();
	about_click();
	
	// friend page
	friend_back_click();
	
	// story page
	story_back_click();
	
	// gaming page
	
	
	
});

function set_position(){
	$('#login').css({left:-w_width,opacity:0});
	$('#main').css({left:-w_width,opacity:0});
	//$('#plant').css({top:w_height,opacity:0});
	//$('#achievement').css({top:w_height,opacity:0});
	$('#set').css({top:w_height,opacity:0},);
	$('#friend').css({left:-w_width,opacity:0});
	$('#story').css({top:w_height,opacity:0});
}

function loading(){
	$('#loading')
		.animate({opacity:1},1000)
		.animate({left:w_width,opacity:0},1000);
}

function login(){
	$('#login')
		.animate({opacity:0},1000)
		.animate({left:0,opacity:1},1000);
}

function main_building_click(){
  var main_bd = document.getElementById('main_building');
  main_bd.addEventListener('touchstart',function(event){
    event.preventDefault();
    $('#main').animate({top:-w_height,opacity:0},1000);
    $('#story').animate({top:0,opacity:1},1000);
  },false);
}

function main_forest_click(){
  var main_fr = document.getElementById('main_forest');
  main_fr.addEventListener('touchstart',function(event){
    event.preventDefault();
    $('#main').animate({left:w_width,opacity:0},1000);
    $('#friend').animate({left:0,opacity:1},1000);
  },false);
}

function main_tree_click(){
  var main_tr = document.getElementById('main_tree');
  main_tr.addEventListener('touchstart',function(event){    
    event.preventDefault();
    $('#main').animate({top:-w_height,opacity:0},1000);
    $('#plant').animate({top:0,opacity:1},1000);
  },false);
}

function main_setting_click(){
  var main_st = document.getElementById('main_setting');
  main_st.addEventListener('touchstart',function(event){
    event.preventDefault();
    $('#main').animate({top:-w_height,opacity:0},1000);
    $('#set').animate({top:0,opacity:1},1000);
  },false);
}

function story_back_click(){
  var story_bk = document.getElementById('story_back');
  story_bk.addEventListener('touchstart',function(event){
    event.preventDefault();
    $('#story').animate({top:w_height,opacity:0},1000);
    $('#main').animate({top:0,opacity:1},1000);
  },false);
}

function fb_click(){
	var fb = document.getElementById('facebook');
	fb.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#login').animate({left:w_width,opacity:0},1000);
		$('#main').animate({left:0,opacity:1},1000);
	},false);
}

function gg_click(){
	var gg = document.getElementById('google');
	gg.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#login').animate({left:w_width,opacity:0},1000);
		$('#main').animate({left:0,opacity:1},1000);
	},false);
}

/*
function achievement_click(){
	var am  = document.getElementById('achievement');
	var ac1 = document.getElementById('ac1');
	var ac2 = document.getElementById('ac2');
	var ac3 = document.getElementById('ac3');
	var ac4 = document.getElementById('ac4');
	var ac5 = document.getElementById('ac5');
	var ac6 = document.getElementById('ac6');
	var ac7 = document.getElementById('ac7');
	var ac8 = document.getElementById('ac8');
	var ac9 = document.getElementById('ac9');
	var number = 0;
	var off_top = [0, 0.2, 0.2, 0.2, 0.45, 0.45, 0.45, 0.7, 0.7, 0.7];
	var off_left = [0, 0.1, 0.4, 0.7, 0.1, 0.4, 0.7, 0.1, 0.4, 0.7];
	
	am.addEventListener('touchstart',function(event){
		event.preventDefault();		
		var choose = event.target.id;
		var sub = choose.slice(0,3);
		
		if(choose == 'achievement' || number){
			for(var i=1;i<10;i++)
				if(i!=number)
					$("#a"+i).animate({opacity:1},1000);
			$("#a"+number).animate({top:off_top[number]*w_height, left:off_left[number]*w_width},1000);
			$("#pic"+number).animate({width:0.2*w_width},1000);
			document.getElementById('content').innerHTML = "";
			number = 0;
		}
		
		else if(sub == 'pic'){
			var choose_parent = event.target.parentNode.id;
			number = choose.slice(3,4);
			for(var i=1;i<10;i++)
				if(i!=number)
					$("#a"+i).animate({opacity:0},1000);
			$("#"+choose_parent).animate({top:0.3*w_height, left:0.3*w_width},1000);
			$("#"+choose).animate({width:0.4*w_width},1000);
			
			if(number == 1 || number == 6 || number == 8)
				document.getElementById('content').innerHTML = "<b>watering plant</b><br>(25/100)";		
			else if(number == 2 || number == 4 || number == 9)
				document.getElementById('content').innerHTML = "<b>catching worms</b><br>(47/100)";	
			else
				document.getElementById('content').innerHTML = "<b>earning money</b><br>(87/100)";		
		}
	},false);
}*/

function set_back_click(){
	var stb = document.getElementById('set_back');
	stb.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#main').animate({top:0,opacity:1},1000);
		$('#set').animate({top:w_height,opacity:0},1000);
	},false);
	
}

function toggle_switch(){
	var sw = document.getElementById('switch');
	var myAudio = document.getElementById('music');
	
	sw.addEventListener('change',function(){
		if(sw.checked)
			myAudio.play();
		else{
			myAudio.pause();
			myAudio.currentTime = 0;
		}
	});
}

function about_click(){
	var at = document.getElementById('about');
	at.addEventListener('touchstart',function(event){
		event.preventDefault();		
		var opt = document.getElementById('container').style.opacity;
		if(opt==1)
			$('#container').animate({opacity:0},1000,function(){
				$(this).css('z-index',-1);
				});
		else{
			$('#container').css('z-index',0);
			$('#container').animate({opacity:1},1000);
		}
	},false);
}

function friend_back_click(){
	var frb = document.getElementById('friend_back');
	frb.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#main').animate({left:0,opacity:1},1000);
		$('#friend').animate({left:-w_width,opacity:0},1000);
	},false);
}

