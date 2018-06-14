var mysql = require("mysql");
var pool = mysql.createPool({
  host: 'localhost',
  user: 'uidd2018_groupM',
  password: 'e24056051',
  database: 'uidd2018_groupM'

});

var db = {};
db.con = function(callback){
  pool.getConnection(function(err, connection){
    console.log("connect start...")
    if(err){
        console.log("Failed to connect");
        throw err;
    }
    else{
      callback(connection);
    }
    connection.release();
    console.log("connect end...")
  })
}

module.exports = db;
