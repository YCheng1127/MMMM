$.mobile.autoInitializePage = false;
var tool = [false, false, false, false, false];
var working = false;
var use = false;
var obj = null;
var viewshop = true;
var leaf = $("<img class = 'leaf' src = 'ICON/leaf.png' height = 10% >");
var drop = 0;
var money = 10000;
var id;
var dropid;

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

function slide(i) {
	$("#tool" + i).click(function () {
		if (!tool[i]) {
			$("#tool" + i + "b").animate({ "height": "37vh", "top": "55vh" }, 350, function () { tool[i] = true; });
		}
	});
}

function hide(i) {
	$("*").click(function () {
		if (tool[i] && !working) {
			working = true;
			$("#tool" + i + "b").animate({ "height": "0vh", "top": "90vh" }, 350, function () { tool[i] = false; working = false; });
		}
	});
}

function make(dom) {
	//event.stopPropagation();
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
		time++;
		make($("#watercan"));		
		if (!(time % 3)) {
			$("#thisyear").text(1950 + time / 3);
			$("#timeline").css("width", 1 + time / 3 * 2 + "%");
			var drop = 0;
			var n = 5 + Math.random() * 75;//振幅
			var a = Math.random() * 6;//相角
			var newleaf = leaf.clone();
			newleaf.attr("id", "leaf" + num);
			num++;
			newleaf.css({ "top": "30vh", "left": n + "vw", "position": "absolute" });
			$("#plant").append(newleaf);
			dropid = setInterval(function () {//落葉
				newleaf.css({ "top": 30 + drop + "vh", "left": n + 8 * Math.sin(drop / 2 + a) + "vw", "transform": "rotate(" + (Math.sin(drop / 2 + a) * 25 - 10) + "deg)" });
				drop += 0.16;
				if (drop >= 45)
					clearInterval(dropid);
			}, 16.6);
		}
	})
}

$(document).ready(function () {
	leaf.css({ "left": "10vw", "position": "relative" });
	//timer();
	document.body.addEventListener('touchmove', function (event) {//避免問題
		event.preventDefault();
	}, false);

	$("#storeicon").click(function () {
		if (viewshop) {
			$("#shop").css("box-shadow", "5px 5px 10px 0.3px rgba(20%,20%,40%,0.3)");
			$("#shop").animate({ "width": "100vw" }, 500, function () { $(".price").show() });
			viewshop = false;
		}
	});
	$("#goback").click(function () {
		if (!viewshop) {
			$("#shop").animate({ "width": "0vw" }, 350);
			$(".price").hide()
			viewshop = true;
		}
		else {
			$("#main").css("top", "0");
			$("#main").css("opacity", "1");
			$("#pbackground").hide();
		}
	});
	$(".good").click(function () {
		var i = $(event.target).index() - 17;
		money -= $("#shop > p:nth-of-type(" + i + ")").text();
		$("#moneybar > p").text(money);
	});
	slide(2);//道具列滑出/隱藏
	slide(3);
	slide(4);
	hide(2);
	hide(3);
	hide(4);
	$("#tool1").click(function (e) { make($("#watercan")); })
	$("[class^=tool]").click(function (e) { make($(this)); })
	$("#plant").click(function (e) {
		//stopImmediatePropagation();
		if (use) {
			$("#click").hide();
			obj.offset({
				top: e.pageY - 40,
				left: e.pageX - 40
			});
			obj.show();
			obj.css("transform");
			if (obj.attr("src") == "ICON/watering-can (1).png")
				obj.css("transform", "rotate(-45deg)");
			else if (obj.attr("class") == "tool2b" || obj.attr("class") == "tool4b")
				obj.animate({ "top": e.pageY + 10 + "px", "left": e.pageX - 100 + "px" }, 500, function () {use = false;obj.remove();});
			else if (obj.attr("class") == "tool3b")
				obj.effect("bounce");
			else
				obj;
			setTimeout(function () {
				use = false;
				obj.remove();
			}, 500);
		}		
	});
	$("#plant").on("vmousemove", ".leaf", function (e) {
		//event.stopPropagation();
		clearInterval(dropid);
		$(this).offset({
			top: e.pageY - 40,
			left: e.pageX - 40
		})
	});
	$("#plant").on("vmouseup", ".leaf", function (e) {			
		var y = (e.pageY-45) / document.documentElement.clientHeight * 100
		if (y < 75){						
			var drop = 0;
			var n = (e.pageX - 45) / document.documentElement.clientWidth * 100;
			var a = Math.random() * 6;
			var degree = Math.asin((getdegree($(e.target)) + 10)/25)-a
			console.log(degree)
			dropid = setInterval(function () {//落葉
				$(e.target).css({ "top": y + drop + "vh", "left": n + 8 * Math.sin(degree + drop / 2 + a) + "vw", "transform": "rotate(" + (Math.sin(degree + drop / 2 + a) * 25 - 10) + "deg)" });
				drop += 0.16;				
				if (y + drop >= 75)
					clearInterval(dropid);
			}, 16.6);
		}
	});
	$("#plant").on("click", ".leaf", function () {
		id = $(this).attr("id")[4];
		//if (id == 0) {
		$("#window").css("display", "flex");
		//}
	});
	/*$("#window > button:nth-of-type(1)").click(function () {
	  $("#all").show();
	  $("#window").css("display", "none");
	  $("[name= screen-orientation]").attr("content", "landscape");
	});*/
	$("#window > button:nth-of-type(2)").click(function () {
		$("#window").css("display", "none");
	});

});