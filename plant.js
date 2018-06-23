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
var txt= "從葉脈深處傳來記憶的脈動，是否探索？";

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
	$.ajax({
		method: "post",
		url: "./year2",
		success: function (data) {
			time = data;//得到使用者資料，或是得到建立好的資料
			if (time != 0) {
				$("#thisyear").text(1724 + time);
				$("#timeline").animate({ "width": time * 0.17 + "%" }, 300);
			}
		}
	})
	var num = 0;
	setTimeout(function(){
		var progress = setInterval(function(){
			time++;
			$("#thisyear").text(1724 + time);
			$("#timeline").animate({"width": time * 0.17 + "%"},300);
			$.ajax({
				method: "post",
				url: "./year",
				data: {
					year: time,
				},
			})
			if((time >= 1 &&num==0) || (time >= 12 &&num==1) || (time >= 35 &&num==2) || (time >= 51 &&num==3) || (time >= 64 &&num==4) || (time >= 111 &&num==5) || (time >= 124 &&num==6) || (time >= 183 &&num==7) || (time >= 187 &&num==8) || (time >= 203 &&num==9) || (time >= 204 &&num==10) || (time >= 206 &&num==11) || (time >= 208 &&num==12) || (time >= 211 &&num==13) || (time >= 239 &&num==14) || (time >= 241 &&num==15) || (time >= 253 &&num==16)){
				dropping(num);
				num++;
				console.log(num)
			}
		} ,3000)
	},5000)	
	
	$("#bigtree").click(function () {
		if (use)
			time++;				
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
	timer();
	leaf.css({ "left": "10vw", "position": "relative" });

	document.body.addEventListener('touchmove', function (event) {//避免問題
		event.preventDefault();
	}, false);

	/*$("#plantback").click(function () {
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
			$("[src^='ICON2/yeaf']").each(function(){
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

	$("#bigtree").on("click",function (e) {
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
		if (id == 0) {
			$("#text").text("築城!!\n");
		}
		else if(id == 1){
			$("#text").text("木城門升級磚城門\n");
		}
		else if(id == 2){
			$("#text").text("加固竹城牆\n");
		}
		else if(id == 3){
			$("#text").text("城外的魁斗山是公墓\n");
		}
		else if(id == 4){
			$("#text").text("林爽文事件，木牆升級土牆\n"+txt);
		}
		else if(id == 5){
			$("#text").text("張丙事件與月城\n"+txt);//game
		}
		else if(id == 6){
			$("#text").text("城門上有示警碑\n");
		}
		else if(id == 7){
			$("#text").text("城外變成射擊場\n");
		}
		else if(id == 8){
			$("#text").text("城門存?廢?\n整理古碑_碑林前身");
		}
		else if(id == 9){
			$("#text").text("重修城門I\n");
		}
		else if(id == 10){
			$("#text").text("射擊場→體育場\n");
		}
		else if(id == 11){
			$("#text").text("移建九龜碑\n");
		}
		else if(id == 12){
			$("#text").text("我也要聽廣播\n");
		}
		else if(id == 13){
			$("#text").text("全島大動員\n");
		}
		else if(id == 14){
			$("#text").text("滿城風雨樓欲搖\n");
		}
		else if(id == 15){
			$("#text").text("龜龜 不要走！\n"+txt);//game
		}
		else if(id == 16){
			$("#text").text("重建城門II\n");
		}

		if ($("#leaf" + id).attr("src")[6] != "y")
			$("#window").css("display", "flex");			
	});
	/*$("#window > button:nth-of-type(1)").click(function () {
	  $("#all").show();
	  $("#window").css("display", "none");
	  $("[name= screen-orientation]").attr("content", "landscape");
	});*/
	$("#window > button:nth-of-type(2)").click(function () {
		$("#window").css("display", "none");
		var s = $("#leaf" + id).attr("src");//黃葉
		s = s.replace(/l/,"y");
		$("#leaf" + id).attr("src", s);
	});

	var seq = [5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4];
	var index = 0;
	setInterval(()=>{
		if (Math.random() < 0.33){
			var i = Math.ceil(Math.random() * 2);
			$("#wind" + i).css("top", 20 + Math.random() * 40 +"vh");
			$("#wind" + i).fadeIn(1000).fadeOut(1000);
			var shake = setInterval(() => {
				$("#bigtree").attr("src", "ICON2/tree" + seq[index] + ".png");
				index++;
				if (index > 15)
					index = 0;
				setTimeout(() => { clearInterval(shake) }, 3000);
			}, 80)
		}
	},2000)
		
});