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

function make_tree_page(){
  var box=document.getElementById("friend");
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
}
