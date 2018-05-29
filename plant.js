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

function slide(i) {
  $("#tool" + i).click(function () {
    if (!tool[i]) {
      $("#tool" + i + "b").animate({ "height": "37vh","top":"55vh"}, 350, function () { tool[i] = true; });
    }
  });
}

function hide(i) {
  $("*").click(function () {
    if (tool[i] && !working) {
      working = true;
      $("#tool" + i + "b").animate({ "height": "0vh", "top": "90vh"}, 350, function () { tool[i] = false; working = false; });
    }
  });
}

function make(e, dom) {
  event.stopPropagation();
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
  var timerid = setInterval(function () {
    time++;
    $("#thisyear").text(1950 + time);
    $("#timeline").css("width", 1 + time * 2 + "%");
    if (time % 2 && time <= 10)//落葉落下
    {
      var drop = 0;
      var n = 5 + Math.random() * 75;
      var a = Math.random() * 6;
      var newleaf = leaf.clone();
      newleaf.attr("id", "leaf" + num);
      num++;
      newleaf.css({ "top": "30vh", "left": n + "vw", "position": "absolute" });
      $("#plant").append(newleaf);
      var id = setInterval(function () {
        newleaf.css({ "top": 30 + drop + "vh", "left": n + 8 * Math.sin(drop / 2 + a) + "vw", "transform": "rotate(" + (Math.sin(drop / 2.5 + a) * 25 - 5) + "deg)" });
        drop += 0.15;
        if (drop >= 45)
          clearInterval(id);
      }, 16.6);
    }
    if (time == 48) {
      clearInterval(timerid);
      //$("#shadow").show();
    }
  }, 1000);
}

$(document).ready(function () {
  leaf.css({ "left": "10vw", "position": "relative" });
  timer();
  document.body.addEventListener('touchmove', function (event) {
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
    else 
    {
      $("#main").css("top", "0");
      $("#main").css("opacity","1");
      $("#pbackground").hide();
    }
  });
  $(".good").click(function () {
    var i = $(event.target).index() - 17;
    money -= $("#shop > p:nth-of-type(" + i + ")").text();
    $("#moneybar > p").text(money);


  });

  slide(2);
  slide(3);
  slide(4);
  hide(2);
  hide(3);
  hide(4);
  $("#tool1").click(function (e) { make(e, $("#watercan")); });
  $("[class^=tool]").click(function (e) { make(e, $(this)); });
  $("#plant").click(function (e) {
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
        obj.animate({ "top": e.pageY + 10 + "px", "left": e.pageX - 100 + "px" }, 600);
      else if (obj.attr("class") == "tool3b")
        obj.effect("bounce");
      else
        obj;
      setTimeout(function () {
        use = false;
        obj.remove();
      }, 600);
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