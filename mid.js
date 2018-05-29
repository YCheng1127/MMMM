var w_width = $(window).width();
var w_height = $(window).height();
var front = 0; // where enter shop // 0 for main ,1 for plant

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
	sun_click();
	setting_click();
	tree_click();
	cloud_click();
	
	// plant page
	/*map_click();
	store1_click();
	back_click();
	
	slide(2);
	slide(3);
	slide(4);
	hide(2);
	hide(3);
	hide(4);
	
	$("#tool1").click(function(e){
		make(e,$("#watercan"));
	});
	
	$("[class^=tool]").click(function(e){
		make(e,$(this));
	});
	
	$("#plant").click(function(e){
		if(clicked){
			obj.offset({top: e.pageY-40, left: e.pageX-40});
			obj.show();
			obj.css("transform");
			if(obj.attr("src") == "wateringcan1.png")
				obj.css("transform","rotate(-45deg)");
			else if(obj.attr("class") == "tool2b" || obj.attr("class") == "tool4b")
				obj.animate({"top": e.pageY+10+"px", "left": e.pageX-100+"px"},600);
			else if(obj.attr("class") == "tool3b")
				obj.effect("bounce");
			else
				obj;
			setTimeout(function(){
				clicked = false;
				obj.remove();
			},600);
		}
	});	*/
	
	// acheievment page
	sun_back_click();
	achievement_click();
	
	// setting page
	set_back_click();
	toggle_switch();
	about_click();
	
	// friend page
	forest_click();
	friend_back_click();
	
	// store page
	store_click();
	
	// story page
	gate_click();
	
	// gaming page
	
	
	
});

function set_position(){
	$('#login').css({left:-w_width,opacity:0});
	$('#main').css({left:-w_width,opacity:0});
	//$('#plant').css({top:w_height,opacity:0});
	$('#achievement').css({top:w_height,opacity:0});
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

function tree_click(){
	var tr = document.getElementById('tree');
	tr.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#main').animate({top:-w_height,opacity:0},1000);
		//$('#plant').animate({top:0,opacity:1},1000);
		$("#pbackground").show();
		timer();
	},false);
}

function map_click(){
	var mp = document.getElementById('map');
	mp.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#plant').animate({top:w_height,opacity:0},1000);
		$('#main').animate({top:0,opacity:1},1000);
	},false);
}

function store1_click(){
	var st1 = document.getElementById('store1');
	st1.addEventListener('touchstart',function(event){
		front = 1;
		event.preventDefault();
		$("#map").hide("slow");
		$("#item_back").css({opacity:1});
		$("#item").css("box-shadow","5px 5px 10px 0.3px rgba(20%,20%,40%,0.3)");
		$("#item").animate({width:w_width},1000);
		$("#item_back").css({height:0.1*w_height});
	},false);
}

function back_click(){
	var bk = document.getElementById('item_back');
	bk.addEventListener('touchstart',function(event){
		event.preventDefault();
		$("#item_back").css({height:0});
		$("#item").animate({width:0},350);
		if(front){
			$("#map").show("slow");
		}
	},false);
}

var tool = [false,false,false,false,false];
var working = false;
var clicked = false;
var obj = null;

/*function slide(i){
	$("#tool"+i).click(function(){
		if(!tool[i]){   
			$("#tool"+i+"b").animate({"width":"60vw"},350,function(){
				tool[i] = true;
			});
		}
	});
}

function hide(i){
	$("*").click(function(){
		if(tool[i] && !working){
			working = true;
			$("#tool"+i+"b").animate({width:0},350,function(){
				tool[i] = false;
				working = false;
			});
		}
	});
}

function make(e,dom){
	event.stopPropagation();
	obj = dom.clone();
	obj.css("position","absolute");
	$("#plant").append(obj);
	obj.hide();
	clicked = true;
}*/

function sun_click(){
	var su = document.getElementById('sun');
	su.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#main').animate({top:-w_height,opacity:0},1000);
		$('#achievement').animate({top:0,opacity:1},1000);
	},false);
}

function sun_back_click(){
	var sb = document.getElementById('sun_back');
	sb.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#main').animate({top:0,opacity:1},1000);
		$('#achievement').animate({top:w_height,opacity:0},1000);
	},false);
}

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
}

function setting_click(){
	var ss = document.getElementById('settings');
	var cd = document.getElementById('clouds');
	
	ss.addEventListener('touchstart',function(){
		event.preventDefault();
		$('#main').animate({top:-w_height,opacity:0},1000);
		$('#set').animate({top:0,opacity:1},1000);
	},false);
	
	cd.addEventListener('touchstart',function(){
		event.preventDefault();
		$('#main').animate({top:-w_height,opacity:0},1000);
		$('#set').animate({top:0,opacity:1},1000);
	},false);
}

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

function cloud_click(){
	var cld = document.getElementById('cloud');
	cld.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#cloud').effect('shake');
		if($('#dollar1').css('display')!='none'){
			$('#dollar1').animate({top:0.23*w_height},900).fadeOut('slow');
			$('#dollar2').animate({top:0.25*w_height},1000).fadeOut('slow');
			$('#dollar3').animate({top:0.24*w_height},1200).fadeOut('slow');
			$('#dollar4').animate({top:0.22*w_height},1100).fadeOut('slow');
			$('#dollar5').animate({top:0.26*w_height},1300).fadeOut('slow');
		}
	},false);
}

function forest_click(){
	var fr = document.getElementById('forest');
	fr.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#main').animate({left:w_width,opacity:0},1000);
		$('#friend').animate({left:0,opacity:1},1000);
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

function store_click(){
	var st = document.getElementById('store');
	st.addEventListener('touchstart',function(event){
		front = 0;
		event.preventDefault();
		$("#item_back").css({opacity:1});
		$("#item").css("box-shadow","5px 5px 10px 0.3px rgba(20%,20%,40%,0.3)");
		$("#item").animate({width:w_width},1000);
		$("#item_back").css({height:0.1*w_height});
	},false);
}

function gate_click(){
	var gt = document.getElementById('gate');
	gt.addEventListener('touchstart',function(event){
		event.preventDefault();
		$('#main').animate({top:-w_height,opacity:0},1000);
		$('#story').animate({top:0,opacity:1},1000);
	},false);	
}