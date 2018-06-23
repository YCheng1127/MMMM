const express = require('express')
const app = express()
const port = 10129
const bodyParser = require('body-parser')//post
const https = require('https')
const fs = require('fs')
const mysql = require('mysql')

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

https.createServer(options, app).listen(port)

var c = mysql.createConnection({
  host: 'localhost',
  user: 'uidd2018_groupM',
  password: 'e24056051',
  database: 'uidd2018_groupM'
});


var name = "";
var id = 0;
var friends;
var year = 0;   
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
      c.query(sql, function (err, d) {
        res.send(userdata + JSON.stringify(d));
      })
  }
  c.query('select year from user WHERE id = ' + id, function (error, d, fields) {
    console.log(d[0].year)
    year = d[0].year; 
  })
})

app.post("/year", function (req, res) {
  c.query("UPDATE`user` SET`year` = '" + req.body.year + "' WHERE`user`.`id` = '" + id + "'")
})

app.post("/year2", function (req, res) {
  res.send(""+year)
})

app.post("/ajax_data2", function(req,res){
  fname = req.body.fname
  res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})



