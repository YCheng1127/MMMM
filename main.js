var tool = [false,false,false,false,false];
var working = false;
var clicked = false;
var obj = null;

function slide(i){
    $("#tool"+i).click(function(){
        if (!tool[i])		  
        {   
            $("#tool"+i+"b").animate({"width":"60vw"},350, function() {tool[i] = true;});           
        }
    });
}

function hide(i){
    $("*").click(function(){
        if (tool[i] && !working)
        {  
            working = true;
            $("#tool"+i+"b").animate({"width":"0vw"},350, function() {tool[i] = false;working = false;});           
        }
    });
}

function make(e,dom){
    event.stopPropagation();    
    obj = dom.clone();
    obj.css("position","absolute");
    $("#main").append(obj);
    obj.hide();
    clicked = true;
}

$(document).ready(function(){
    document.body.addEventListener('touchmove', function(event) { 
        event.preventDefault(); 
    }, false);

    $("#store").click(function(){
        $("#shop").css("box-shadow","5px 5px 10px 0.3px rgba(20%,20%,40%,0.3)");	
        $("#shop").animate({"width":"100vw"},500);
    });
    $("#map").click(function(){		
        $("#shop").animate({"width":"0vw"},350);
    });
    slide(2);
    slide(3);
    slide(4);
    hide(2);
    hide(3);
    hide(4);
    $("#tool1").click(function(e){make(e,$("#watercan"));});
    $("[class^=tool]").click(function(e){make(e,$(this));});
    $("#main").click(function (e){
        if (clicked)
        {
            obj.offset({
            top: e.pageY - 40,
            left: e.pageX - 40
            });
            obj.show();
            obj.css("transform");
            if (obj.attr("src") == "ICON/watering-can (1).png")
                obj.css("transform","rotate(-45deg)");
            else if (obj.attr("class") == "tool2b" || obj.attr("class") == "tool4b")
                obj.animate({"top": e.pageY + 10 +"px","left": e.pageX - 100 +"px"},600);
            else if (obj.attr("class") == "tool3b")
                obj.effect("bounce");
            else
                obj;
            setTimeout(function(){
                clicked = false;
		        obj.remove();
            },600);
        }        
    });	
});