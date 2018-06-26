$(document).ready(function(){
  // game start
  moongate_button_click();

  // game control 
  moongate_random_control = setInterval(function(){
    moongate_people_distance(moongate_people_value[1]);       
    moongate_move(moongate_people_value[1]);
  },500);
  moongate_random_control2 = setInterval(function(){
    moongate_people_distance(moongate_people_value[2]);
    moongate_people_distance(moongate_people_value[3]);
    moongate_people_distance(moongate_people_value[4]);
    moongate_move(moongate_people_value[2]);
    moongate_move(moongate_people_value[3]);
    moongate_move(moongate_people_value[4]);    
  },500);
  moongate_left_control_click();
  moongate_right_control_click();

  // game back
  moongate_back_click();
});

var moongate_ready = 0;
var moongate_random_control;
var moongate_random_control2;
var moongate_hand_control;
var moongate_window_width = window.innerWidth;
var moongate_window_height = window.innerHeight;

var moongate_p1_value = {
  number: 1,
  position_x: 0,
  position_y: 0,
  direction_x: 0,
  direction_y: 0,
  move_x: 0,
  move_y: 0,
  destination_x: 0,
  destination_y: 0,
  degree: 0,
  rotate_degree: 0
};

var moongate_p2_value = {
  number: 2,
  position_x: 0,
  position_y: 0,
  direction_x: 0,
  direction_y: 0,
  move_x: 0,
  move_y: 0,
  destination_x: 0,
  destination_y: 0,
  degree: 0,
  rotate_degree: 0
};

var moongate_p3_value = {
  number: 3,
  position_x: 0,
  position_y: 0,
  direction_x: 0,
  direction_y: 0,
  move_x: 0,
  move_y: 0,
  destination_x: 0,
  destination_y: 0,
  degree: 0,
  rotate_degree: 0
};

var moongate_p4_value = {
  number: 4,
  position_x: 0,
  position_y: 0,
  direction_x: 0,
  direction_y: 0,
  move_x: 0,
  move_y: 0,
  destination_x: 0,
  destination_y: 0,
  degree: 0,
  rotate_degree: 0
};

var moongate_people_value = [0, moongate_p1_value, moongate_p2_value, moongate_p3_value, moongate_p4_value];

function moongate_people_distance(moongate_person){
  if(!moongate_ready)
    return;
  moongate_person.position_x = Math.round($('#moongate_people' + moongate_person.number).offset().left);
  moongate_person.position_y = Math.round($('#moongate_people' + moongate_person.number).offset().top);
  moongate_person.direction_x = Math.floor(Math.random()*10)%3;
  moongate_person.direction_y = Math.floor(Math.random()*10)%3;
  moongate_person.move_x = (moongate_person.direction_x < 2) ? Math.floor(Math.random()*10)%10+1 : -Math.floor(Math.random()*10)%10-1;
  moongate_person.move_y = (moongate_person.direction_y < 2) ? Math.floor(Math.random()*10)%10+1 : -Math.floor(Math.random()*10)%10-1;

  if(moongate_in_gate(moongate_person.position_x + moongate_person.move_x, moongate_person.position_y + moongate_person.move_y))
  {
    moongate_person.destination_x = moongate_person.position_x + moongate_person.move_x;
    moongate_person.destination_y = moongate_person.position_y + moongate_person.move_y;
    moongate_person.rotate_degree = Math.atan(moongate_person.move_y / moongate_person.move_x) * 180 / Math.PI;
    moongate_person.degree = (moongate_person.degree + moongate_person.rotate_degree) % 360;
  }
  else if(moongate_in_gate(moongate_person.position_x, moongate_person.position_y + moongate_person.move_y))
  {
    moongate_person.move_x = 0;
    moongate_person.destination_x = moongate_person.position_x + moongate_person.move_x;
    moongate_person.destination_y = moongate_person.position_y + moongate_person.move_y;
    moongate_person.rotate_degree = (moongate_person.move_y > 0) ? (-moongate_person.degree) : (180-moongate_person.degree);
    moongate_person.degree = (moongate_person.move_y > 0) ? 0 : 180;
  }
  else if(moongate_in_gate(moongate_person.position_x + moongate_person.move_x, moongate_person.position_y))
  {
    moongate_person.move_y = 0;
    moongate_person.destination_x = moongate_person.position_x + moongate_person.move_x;
    moongate_person.destination_y = moongate_person.position_y + moongate_person.move_y;
    moongate_person.rotate_degree = (moongate_person.move_x > 0) ? (-moongate_person.degree + 90) : (-moongate_person.degree - 90);
    moongate_person.degree = (moongate_person.move_x > 0) ? 90 : 270;
  }
  else 
  {
    moongate_person.destination_x = moongate_person.position_x;
    moongate_person.destination_y = moongate_person.position_y;
    moongate_person.rotate_degree = 0;
    moongate_person.degree = moongate_person.degree;
  }
}


function moongate_in_gate(x, y){
  var moongate_line_1 = y - Math.round(0.32*moongate_window_height);
  var moongate_line_2 = y - Math.round(0.47*moongate_window_height) + 0.002*Math.pow(x-Math.round(0.47*moongate_window_width),2);
  if(moongate_line_1 >= 0 && moongate_line_2 <= 0 )
    return true;
  else
    return false;
}

function moongate_move(moongate_person){
  if(!moongate_ready)
    return;
  //console.log('move');
  //console.log('d',moongate_person.destination_x, moongate_person.destination_y, moongate_person.rotate_degree);

  // !!! rotate with bug !!!
  $('#moongate_people' + moongate_person.number).animate({left:moongate_person.destination_x, top:moongate_person.destination_y},490,"linear",function(){
    //console.log('f',Math.round($('#moongate_people' + moongate_person.number).offset().left), Math.round($('#moongate_people' + moongate_person.number).offset().top));
    //$('#moongate_people' + moongate_person.number).css("transform", "rotate("+moongate_person.rotate_degree+"deg)");
    //console.log('rt',Math.round($('#moongate_people' + moongate_person.number).offset().left), Math.round($('#moongate_people' + moongate_person.number).offset().top));
  }); 
}


function moongate_button_click(){
  var moongate_btn = document.getElementById('moongate_gamerule_button');
  moongate_btn.addEventListener('touchstart',function(event){
    event.preventDefault();
    $('#moongate_gamerule').hide();
    moongate_ready = 1;
  },false);
}


function moongate_left_control_click(){
  var moongate_lc = document.getElementById('moongate_left_control');
  moongate_lc.addEventListener('touchstart',function(event){
    event.preventDefault();   
    clearInterval(moongate_random_control);
    moongate_hand_control = setInterval(function(){
      if(moongate_in_gate(moongate_p1_value.position_x - 20,moongate_p1_value.destination_y))
      {
        console.log('Go left');
        moongate_p1_value.destination_x = moongate_p1_value.position_x - 20;
        moongate_p1_value.destination_y = moongate_p1_value.position_y;
        moongate_p1_value.move_x = -20;
        moongate_p1_value.move_y = 0;
        //moongate_p1_value.rotate_degree = -moongate_p1_value.degree - 90;
        //moongate_p1_value.degree = 270;
      }
      else
      {
        console.log(' Left Cannot Move ! ');
        moongate_p1_value.destination_x = moongate_p1_value.position_x;
        moongate_p1_value.destination_y = moongate_p1_value.position_y;
        moongate_p1_value.move_x = 0;
        moongate_p1_value.move_y = 0;
        //moongate_p1_value.rotate_degree = -moongate_p1_value.degree - 90;
        //moongate_p1_value.degree = 270;
      }
      moongate_move(moongate_people_value[1]);
      moongate_p1_value.position_x = moongate_p1_value.destination_x;
    },500);
  },false);

  moongate_lc.addEventListener('touchend',function(event){
    event.preventDefault();
    clearInterval(moongate_hand_control);
    moongate_random_control = setInterval(function(){
      moongate_people_distance(moongate_people_value[1]);       
      moongate_move(moongate_people_value[1]);
    },500);       
  },false);   
}


function moongate_right_control_click(){
  var moongate_rc = document.getElementById('moongate_right_control');

  moongate_rc.addEventListener('touchstart',function(event){
    event.preventDefault();
    clearInterval(moongate_random_control);
    moongate_hand_control = setInterval(function(){
      if(moongate_in_gate(moongate_p1_value.position_x + 20,moongate_p1_value.destination_y))
      {
        console.log('Go right');
        moongate_p1_value.destination_x = moongate_p1_value.position_x + 20;
        moongate_p1_value.destination_y = moongate_p1_value.position_y;
        moongate_p1_value.move_x = 20;
        moongate_p1_value.move_y = 0;
        //moongate_p1_value.rotate_degree = -moongate_p1_value.degree + 90;
        //moongate_p1_value.degree = 90;
      }
      else
      {
        console.log(' Right Cannot Move ! ');
        moongate_p1_value.destination_x = moongate_p1_value.position_x;
        moongate_p1_value.destination_y = moongate_p1_value.position_y;
        moongate_p1_value.move_x = 0;
        moongate_p1_value.move_y = 0;
        //moongate_p1_value.rotate_degree = -moongate_p1_value.degree + 90;
        //moongate_p1_value.degree = 90;
      }
      moongate_move(moongate_people_value[1]);
      moongate_p1_value.position_x = moongate_p1_value.destination_x;
    },500);
  },false);

  moongate_rc.addEventListener('touchend',function(event){
    event.preventDefault();
    clearInterval(moongate_hand_control);
    moongate_random_control = setInterval(function(){
      moongate_people_distance(moongate_people_value[1]);       
      moongate_move(moongate_people_value[1]);
    },500);       
  },false);
}

/*************************************************/ // connect with plant page
function moongate_back_click(){
  var moongate_bk = document.getElementById('moongate_back');
  moongate_bk.addEventListener('touchstart',function(event){
    event.preventDefault();
    alert('not yet');
  },false);
}

