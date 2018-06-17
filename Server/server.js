const express=require('express');
const app=express();
const port=10130;

/*app.listen(port);*/  //停止開啟http
const bodyParser=require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:true});
const fs = require('fs');

app.use(express.static(__dirname+'/public'));

//***https***//

    //導入https
var https = require('https');
    //設定https參數
 const options={
     key:fs.readFileSync('/home/uidd2018/ssl/private.key'),
       cert:fs.readFileSync('/home/uidd2018/ssl/certificate.crt'),
         ca:fs.readFileSync('/home/uidd2018/ssl/ca_bundle.crt')
 };

https.createServer(options,app).listen(port,function(){
    console.log('Https server listening on port ' + port);
});

//***mysql***//
/*
    //導入mysql
var mysql = require('mysql');
    //建立mysql連線參數，連接到database: uidd2018_groupM
var con = mysql.createConnection({
    host: "localhost",
      user: "uidd2018_groupM",
        password:"e24056051",
          database:"uidd2018_groupM"
});

    //連接mysql
con.connect(function(err){
    if(err) throw err;
      console.log("Connected");
    
    var sql="CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";//建立table(資料庫格式)
    con.query(sql,function(err,result){
        if(err) console.log("Failed");
        console.log("Table created");
    });
});

    //關閉連接
con.end();
*/

//導入連接池modules(接到database:uidd2018)
var db = require('./db');
//開啟連接，結束自動關閉
/*
db.con(function(connect){
  connect.query("INSERT INTO `friend` (`fid`, `fname`) VALUES ('00004', '魏名駿')",function(err,result){
    if(err){
      console.log("create failed");
      throw err;
    }
    else{
      console.log("hi");
    }
  })
})
*/
/*
var i = 0;
var bignum = 0;
var exist = 0;
var permit = 0;
var id = 0;
*/
var name = "";
var id = 0;
var friends;
var newornot = 1;
var i = 0;
var userdata = {kkk:123};
app.post('/FBcatchuser',urlencodedParser,function(req,res){
  name = req.body.username;
  id = req.body.id;
  friends = req.body.friends;
  newornot = 1;
  //開啟連接，結束自動關閉
  db.con(function(connect){//判斷是否是新使用者
    connect.query("SELECT * FROM user", function(err, result, fields){
      if(err){
        console.log("search failed");
        throw err;
      }
      else{
        
        for(i=0;i<result.length;i++){
          if(result[i].id == id) newornot = 0;
        }
      }

    })
  })
  
  setTimeout(function(){//延遲1秒，避免異步連接重疊
     console.log(newornot); 
     if(newornot == 1){//新使用者，建立資料
        db.con(function(connect){
          connect.query("INSERT INTO user (id, name, money, TurtleScore, CastleScore) Value('"+id + "', '"+ name+ "', '0', '0', '0')", function(err,result){
            if(err) throw err;
            console.log("1 inserted");
            /*
            for(i=0;i<friends.length;i++){//我試著一次將所有朋友資料從資料庫抓取，但是失敗了
              console.log(friends[i].id);
             
              connect.query("SELECT * FROM user WHERE id = '" + friends[i].id +"'",function(err,result){
                if(err) throw err;
                console.log(result);
              })   
            }*/
         })
       })
        userdata=[
        {
          id:id,
          name:name,
          money: 0,
          TurtleScore: 0,
          CastleScore: 0
        }
        ];
       userdata=JSON.stringify(userdata);
       console.log(userdata);
       
      }
    else if(newornot == 0){//舊使用者，讀取資料
      db.con(function(connect){
        connect.query("SELECT * FROM user WHERE id = '" + id + "'", function(err,result){
          if(err) throw err;
          userdata=JSON.stringify(result);
        
        })    
      })
    
    }
  },1000); 
  //獲取朋友資料
  setTimeout(function(){
            db.con(function(connect){
              var sql="SELECT * FROM user WHERE ";
              for(i=0;i<friends.length;i++){
                if(i!=friends.length-1 )
                  sql = sql + "id = '" + friends[i].id + "' or ";
                else 
                  sql = sql + "id = '" + friends[i].id + "'";
              }
              connect.query(sql,function(err,result){
                if(err) throw err;
                console.log(result);
                console.log(sql);
                console.log(userdata+JSON.stringify(result));
                res.send(userdata+JSON.stringify(result));
              })   
            })

  },1500);
  
})
/*
app.post('/catchuser',urlencodedParser,function(req,res){
  console.log(req.body.username);
  console.log(req.body.password);
  //開啟連接，結束自動關閉
  db.con(function(connect){
    connect.query("SELECT * FROM user",function(err,result, fields){
      if(err){
        console.log("search failed");
        throw err;
      }
      else{
        permit = 0;
        bignum=0;  
        exist = 0;
        for(i=0;i<result.length;i++){
          if(bignum < result[i].id)
            bignum = result[i].id;
          if(result[i].name == req.body.username){
            exist = 1;
            if(result[i].password == req.body.password){
              permit = 1;
              id = result[i].id;   
            }
          }
        }        
        if(exist == 1 && permit == 1){
        console.log("the user exist and the password is correct");
        res.send(`Success`);
        }
        else if(exist == 1 && permit == 0){
        console.log("wrong password");
        res.send(`The password is not correct!`);
        }
        else if(exist == 0)
        console.log("the user does not exist");
        res.send(`The user does not exist.`);                
      }
    })    
  })
})*/


