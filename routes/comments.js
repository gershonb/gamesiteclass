var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var comments = ["test", "test2"];
/* GET home page. */
router.get('/', function(req, res, next) {

  // create a connection variable with the required details
var con = mysql.createConnection({
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5446174',
  password: 'WEKAHXGs5p',
  database: 'sql5446174'
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  var sql = "SELECT * FROM comments";
  con.query(sql, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    comments = result;
    console.log(result);
  });
});
const todoItems = [
  'Buy Tofu',
  'Buy Soya Milk',
  'Buy Vegetables',
  'Finish Article'
];
  res.render('comments', {items: todoItems});
});

router.post('/', function(req, res, next) {
      // Value to be inserted
      let userName = req.body.name;
      let userMessage = req.body.message;
      console.log("--" + userName + userMessage)
    
       // create a connection variable with the required details
var con = mysql.createConnection({
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5446174',
  password: 'WEKAHXGs5p',
  database: 'sql5446174'
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  var sql = "INSERT INTO comments (name, message) VALUES ('" + userName + "', '" + userMessage + "')";
  con.query(sql, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
  });
});
 
  res.render('comments');
});

module.exports = router;
