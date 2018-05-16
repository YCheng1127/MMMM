var tool = [false,false,false,false,false];
var working = false;
var drag = false;
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
    drag = true;
    obj = dom.clone();
    $("#main").append(obj);
    obj.show();
    obj.offset({
		top: e.pageY - 40,
		left: e.pageX - 40
	});
}

$(document).ready(function(){
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
    $("#main").touchmove(function (e){
        if (drag)
        {
            obj.offset({
            top: e.pageY - 40,
            left: e.pageX - 40
            });			
        }
    });	
    $("#main").mouseup(function(){
        drag = false;
		obj.remove();
	});	
});
