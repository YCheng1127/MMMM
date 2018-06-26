const express = require('express')
const app = express()
const port = 10130
const bodyParser = require('body-parser')//post
const https = require('https')
const fs = require('fs')
const mysql = require('mysql')
//
var WebSocketServer = require('ws').Server;
//

//read json file
/*var fs = require("fs");
var content = fs.readFileSync("./public/name.json");
var jsonfile=JSON.parse(content);*/

app.use(bodyParser.json());    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true}));//to support URL-encided bodies

app.use(express.static(__dirname));
/*app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
var jsdom = require("jsdom");
$ = require('jquery')(new jsdom.JSDOM().window);*/
const options = {
  key: fs.readFileSync('/home/uidd2018/ssl/private.key'),
  cert: fs.readFileSync('/home/uidd2018/ssl/certificate.crt'),
  ca: fs.readFileSync('/home/uidd2018/ssl/ca_bundle.crt')
};

var server = https.createServer(options, app).listen(port)
//
var w = new WebSocketServer({server});
//
var c = mysql.createConnection({
  host: 'localhost',
  user: 'uidd2018_groupM',
  password: 'e24056051',
  database: 'uidd2018_groupM'
});
//getfriends
app.post("/getfrienddata",function(req, res){
     
      c.query("SELECT * FROM user WHERE id = '" + req.body.id + "'", function (err, d) {
               res.send(JSON.stringify(d));
                   })
})

var name = "";
var id = 0;
var friends;
var year = 0;
var num = 0;   
var newornot = 1;
var userdata = { kkk: 123 };
var i = 0;

app.post("/FBcatchuser", function (req, res) {
  name = req.body.username;
  id = req.body.id;
  friends = req.body.friends;
  c.query('select * from user',function (error, d, fields) {    
    if (error) {
      throw error;
    }
    for (i = 0;i<d.length;i++) {
      if (d[i].id == id)
        newornot = 0;
    }
    if (newornot == 1) {//新使用者，建立資料
      c.query("INSERT INTO user (id, name, money, TurtleScore, CastleScore) Value('" + id + "', '" + name + "', '0', '0', '0')")
      userdata = [{
        id: id,
        name: name,
        money: 0,
        TurtleScore: 0,
        CastleScore: 0
      }]
      userdata = JSON.stringify(userdata);
    }
    else if (newornot == 0) {//舊使用者，讀取資料
      c.query("SELECT * FROM user WHERE id = '" + id + "'", function (err, d) {
        userdata = JSON.stringify(d);
      })
    }
  })
  
  if (friends != undefined) {
      var sql = "SELECT * FROM user WHERE ";
      for (i = 0; i < friends.length; i++) {
        if (i != friends.length - 1)
          sql = sql + "id = '" + friends[i].id + "' or ";
        else
          sql = sql + "id = '" + friends[i].id + "'";
      }
      c.query(sql, function (error, d) {
        if (error) {
          throw error;
        }
        res.send(userdata + JSON.stringify(d));
      })
  }
  c.query('select year,num from user WHERE id = ' + id, function (error, d, fields) {
    if (error) {
      throw error;
    }
    console.log(d[0].year+","+d[0].num)
    year = d[0].year; 
    num = d[0].num;
  })
})

app.post("/year", function (req, res) {
  c.query("UPDATE`user` SET`year` = '" + req.body.year + "' WHERE`user`.`id` = '" + id + "'", function (error, d, fields) {
    if (error) {
      throw error;
    }
  })
})

app.post("/num", function (req, res) {
  c.query("UPDATE`user` SET`num` = '" + req.body.num + "' WHERE`user`.`id` = '" + id + "'", function (error, d, fields) {
    if (error) {
      throw error;
    }
  })
})

app.post("/year2", function (req, res) {
  var array=[year,num]
  res.send(array)
})

w.on('connection', function (ws){
  ws.on('message', function (data) {
    if (data.substr(0,1) == "a"){
      ws.send(num+"a"+year);
    }
    else if (data.substr(0, 1) == "y"){
      c.query("UPDATE`user` SET`year` = '" + data.substr(1) + "' WHERE`user`.`id` = '" + id + "'", function (error, d, fields) {
        if (error) {
          throw error;
        }
      })
    }
    else if (data.substr(0, 1) == "n"){
      c.query("UPDATE`user` SET`num` = '" + data.substr(1) + "' WHERE`user`.`id` = '" + id + "'", function (error, d, fields) {
        if (error) {
          throw error;
        }
      })
    }
  });
});




