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
  Page.style.position="absolute";
  Page.style.left="0%";
  Page.style.top="0%";
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
    game_value.innerHTML="<p>   "+GV[0].name+" 's Tree</p> <p>   Year: "+GV[0].year+"</p> <p>   TurtleScore:　" +GV[0].TurtleScore+"</p> <p>   CastleScore: "+GV[0].CastleScore;
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
