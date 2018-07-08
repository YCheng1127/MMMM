function make_friends_face(){
  var q=0;
  if(myfriends.length<8){
    for(q=0;q<myfriends.length;q++){
      
        document.getElementById("friend_photo"+[q+1]).setAttribute("src","http://graph.facebook.com/" +myfriends[q].id +"/picture?type=large")
      
    }
  }
  else{
    for(q=0;q<7;q++){
      
        document.getElementById("friend_photo"+[q+1]).setAttribute("src","http://graph.facebook.com/" +myfriends[q].id +"/picture?type=large")
    }
  }
}

function make_tree_page(data){
  var box=document.getElementById("friend");
  var GV=JSON.parse(data);
  //底圖
  var Page=document.createElement("div");
  Page.style.backgroundImage="url(ICON2/種樹頁底圖.png)";
  Page.style.backgroundSize="100% 100%";
  Page.style.width="100%";
  Page.style.height="100%";
  Page.style.position="fixed";
  Page.style.left="0%";
  Page.style.top="0%";
  Page.style.zIndex="6";
  Page.setAttribute("id","friend_tree_page");
  box.appendChild(Page);
  //時間
  var Page_time=document.createElement("div");
  Page_time.innerHTML='<img id="friendtime" src="ICON2/時間軸.png" height="8%">';
  Page_time.setAttribute("id","friendbar");
  Page.appendChild(Page_time);
  //樹
  var Page_tree=document.createElement("img");
  Page_tree.src="ICON2/tree7.png";
  Page_tree.setAttribute("id","friend_tree")
  Page_tree.style.zIndex="4";
  Page.appendChild(Page_tree);
  //數值
  var game_value=document.createElement("div");
  game_value.setAttribute("id","friend_value");
  game_value.style.position="absolute";
  game_value.style.top="20%";
  game_value.style.width="35%";
  game_value.style.backgroundColor="#49e54942";
  game_value.style.fontSize="5vw";
  game_value.style.fontStyle="monospace"
  game_value.style.zIndex="5";
  game_value.style.left="3vw"
  if(GV[0]!=null)
    game_value.innerHTML="<p>   "+GV[0].name+" 's Tree</p> <p>   Year: "+[GV[0].year+1724]+"</p> <p>   TurtleScore:　" +GV[0].TurtleScore+"</p> <p>   CastleScore: "+GV[0].CastleScore;
  else
    game_value.innerHTML="The Player doesn't exist";
  Page.appendChild(game_value);
  var killpage=document.createElement("div");
  killpage.setAttribute("id","killpage")
  Page.appendChild(killpage);
  killpage.position="absolute";
  killpage.style.width="7%";
  right="3%";
  bottom="3%";
  killpage.innerHTML='<img id="killpagebutton" src="./png/game_back.png" onclick="killpage()">';
  dropping2(15);
  
  /*
	$("#friend_tree_page").on("click", ".leaf", function () {
		id = $(this).attr("id").substr(4);
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
	});*/

}


function dropping2(num){
	var drop = 0
	var n = 5 + Math.random() * 75;//振幅
	var a = Math.random() * 6;//相角
	var newleaf = leaf.clone();
	newleaf.attr("id", "leaf" + num);
	newleaf.attr("src", "ICON2/leaf" + Math.ceil(Math.random() * 3) + ".png");
	newleaf.css({ "top": "30vh", "left": n + "vw", "position": "absolute" });
	$("#friend_tree_page").append(newleaf);
	dropid[num] = setInterval(function () {//落葉
		newleaf.css({
			"top": 30 + drop + "vh", "z-index":7, "left": n + 8 * Math.sin(drop / 2 + a) + "vw", "transform": "rotate(" + (Math.sin(drop/ 2 + a) * 25 - 10) + "deg)" });
				drop += 0.16;
			if(drop >= 45)
		clearInterval(dropid[num]);
	}, 16.6);
}

clickphoto=function(num){
  if(myfriends[num]!=undefined){
    getfrienddata(myfriends[num].id,function(data){
       console.log(data);
        make_tree_page(data);


    })
  }
}

killpage=function(){
  document.getElementById("friend_tree_page").remove();
}


	
