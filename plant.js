$.mobile.autoInitializePage = false;
var tool = [false, false, false, false, false];
var working = false;
var use = false;
var obj = null;
var tool = 0;
var leaf = $("<img class = 'leaf' src = 'ICON/leaf.png' height = 8% >");
var id;
var dropid = [0,0,0,0,0,0,0,0,0,0,0];
var water = $("#water");
var waterid = null;

function getdegree(obj) {
	var matrix = obj.css("-webkit-transform") ||
		obj.css("-moz-transform") ||
		obj.css("-ms-transform") ||
		obj.css("-o-transform") ||
		obj.css("transform");
	if (matrix !== 'none') {
		var values = matrix.split('(')[1].split(')')[0].split(',');
		var a = values[0];
		var b = values[1];
		var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
	} else { var angle = 0; }
	return angle;
}

function make(dom) {
	obj = dom.clone();
	obj.css("position", "absolute");
	$("#plant").append(obj);
	obj.hide();
	$("#click").show();
	use = true;
}

function timer() {
	var time = 0;
	var num = 0;
	$("#bigtree").click(function () {
		if (use)
		{
			time++;
			//make($("#watercan"));		
			if (!(time % 3)) {
				$("#thisyear").text(1950 + time / 3);
				$("#timeline").animate({"width": 1 + time / 3 * 2 + "%"},300);		
				dropping(num);
				num++;
			}
		}
	})
}

function dropping(num){
	var drop = 0
	var n = 5 + Math.random() * 75;//振幅
	var a = Math.random() * 6;//相角
	var newleaf = leaf.clone();
	newleaf.attr("id", "leaf" + num);
	newleaf.attr("src", "ICON2/leaf" + Math.ceil(Math.random() * 3) + ".png");
	newleaf.css({ "top": "30vh", "left": n + "vw", "position": "absolute" });
	$("#plant").append(newleaf);
	dropid[num] = setInterval(function () {//落葉
		newleaf.css({
			"top": 30 + drop + "vh", "left": n + 8 * Math.sin(drop / 2 + a) + "vw", "transform": "rotate(" + (Math.sin(drop/ 2 + a) * 25 - 10) + "deg)" });
				drop += 0.16;
			if(drop >= 45)
		clearInterval(dropid[num]);
	}, 16.6);
}


$(document).ready(function () {
	leaf.css({ "left": "10vw", "position": "relative" });

	document.body.addEventListener('touchmove', function (event) {//避免問題
		event.preventDefault();
	}, false);
  /*
	$("#plantback").click(function () {
		$("#main").css("top", "0");
		$("#main").css("opacity", "1");
		$("#pbackground").hide();
	});*/

	$("#tool1").on("vmousedown",function () {
		use = false;
		$("#click").hide();
		$(this).attr("src","ICON2/吹風機按鈕按下去.png")
		$("#tool2").attr("src", "ICON2/澆水器按鈕.png")
	})
	$("#tool1").on("vmouseup", function () {
		$(this).attr("src", "ICON2/吹風機按鈕.png")
		tool = 1;
		$("#boom").show();
		$("#boom").animate({"height":"100vw","width":"100vw","top":"50vw"},800,function(){
			$(this).fadeOut(500, function () { $("#boom").css({ "height": "0", "width": "0", "top": "100vw" })});			
		})		
		setTimeout(function () {
			$(".leaf").each(function(){
				clearInterval(dropid[$(this).attr("id")[4]]);
				if (parseInt($(this).css("left")) / document.documentElement.clientWidth * 100 > 50){
					$(this).animate({ "top": "-10vh", "left": 50 + Math.random() * 1000 + "vw" }, 1000,()=>{$(this).remove()});
				}
				else{
					$(this).animate({ "top": "-10vh", "left": 50 - Math.random() * 1000 + "vw" }, 1000,()=>{$(this).remove()});
				}
			})
		},220)
	})
	$("#tool2").on("vmousedown", function () {
		use = false;		
		$(this).attr("src", "ICON2/澆水器按鈕按下去.png")
	})
	$("#tool2").on("vmouseup", function (e) {
		$(this).attr("src", "ICON2/種樹頁-21.png")
		tool = 2;
		$("#click").show();
		setTimeout(function () {
		use = true;
		},100)
	})

	$("#plant").click(function (e) {
		if (use) {
			clearTimeout(waterid);
			if (tool== 2)
				obj = $("#watercan");
			$("#click").hide();
			obj.css({"top": e.pageY - 40,"left": e.pageX - 40});
			water.css({ "top": e.pageY + 25, "left": e.pageX + 30 });
			obj.show();
			waterid = setTimeout(function () {
				water.slideDown();
				water.fadeOut(200);
			}, 300);
			obj.css("transform");
			if (obj.attr("id") == "watercan")
				obj.css("transform", "rotate(35deg)");
			setTimeout(function () {
				//use = false;
				obj.hide();
				obj.css("transform", "rotate(0deg)");
			}, 700);
		}		
	});
	$("#plant").on("vmousemove", ".leaf", function (e) {
		
		$(this).offset({
			top: e.pageY - 40,
			left: e.pageX - 40
		})
	});
	$("#plant").on("vmouseup", ".leaf", function (e) {
		clearInterval(dropid[$(this).attr("id")[4]]);
		var obj = $(this);			
		var y = (e.pageY-45) / document.documentElement.clientHeight * 100
		if (y < 75){						
			var drop = 0;
			var n = (e.pageX - 45) / document.documentElement.clientWidth * 100;
			var a = Math.random() * 6;
			var degree = Math.asin((getdegree($(obj)) + 10) / 25) - a
			dropid[obj.attr("id")[4]] = setInterval(function () {//落葉
				obj.css({ "top": y + drop + "vh", "left": n + 8 * Math.sin(degree + drop / 2 + a) + "vw", "transform": "rotate(" + (Math.sin(degree + drop / 2 + a) * 25 - 10) + "deg)" });
				drop += 0.16;				
				if (y + drop >= 75)
					clearInterval(dropid[obj.attr("id")[4]]);
			}, 16.6);
		}
	});
	$("#plant").on("click", ".leaf", function () {
		id = $(this).attr("id")[4];
		//if (id == 0) {
		$("#window").css("display", "flex");
		//}
		//黃葉
		//$("#leaf" + id).
	});
	/*$("#window > button:nth-of-type(1)").click(function () {
	  $("#all").show();
	  $("#window").css("display", "none");
	  $("[name= screen-orientation]").attr("content", "landscape");
	});*/
	$("#window > button:nth-of-type(2)").click(function () {
		$("#window").css("display", "none");
	});
	setInterval(()=>{
		if (Math.random() < 0.33){
			var i = Math.ceil(Math.random() * 2);
			$("#wind" + i).css("top", 20 + Math.random() * 40 +"vh");
			$("#wind" + i).fadeIn(1000).fadeOut(1000);
			var shake = setInterval(() => {
				$("#bigtree").attr("src", "ICON2/tree" + seq[index] + ".png");
				index++;
				if (index > 3)
					index = 0;
				setTimeout(() => { clearInterval(shake) }, 3000);
			}, 100)
		}
	},2000)
	var seq = [2,3,2,1];
	var index = 0;
	
});
