var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'mysql.thinkterns.com', //mysql database host name
  user     : 'akmoney', //mysql database user name
  password : 'Spam2702', //mysql database password
  database : 'testmyride' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all customers
app.get('/users', function (req, res) {
   connection.query('select * from users', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
	});
});
//rest api to get a single customer data
app.get('/users/:id', function (req, res) {
   connection.query('select * from users where Id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to create a new customer record into mysql database
app.post('/users', function (req, res) {
   var params  = req.body;
   console.log(params);
   connection.query('INSERT INTO customer SET ?', params, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
app.put('/users', function (req, res) {
   connection.query('UPDATE `users` SET `user_name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/users', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
	});
});

/*****************************************************************************/
/********************************** Leads ************************************/
/*****************************************************************************/

app.get('/leads', function (req, res) {
   connection.query('select * from leads', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify({data: results}));
	});
});

app.get('/leads/:id', function (req, res) {
   connection.query('select * from leads where Id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
app.put('/lead', function (req, res) {
  var leadHistory = '';
  var historyNow = '';
  getleadDetails(req.body.leadId).then((data) => {
    historyNow = appendLeadhistory(req.body.assignedToName, req.body.assignee, data[0]);
    if(data[0]['leadHistory'].trim() === '') {
      leadHistory = historyNow;
    } else {
      leadHistory = data[0]['leadHistory'] + '|' + historyNow;
    }
    connection.query('UPDATE `leads` SET `assignedTo`=?,`assignedToName`=?, `leadHistory`=? where `leadId`=?', [req.body.assignee,req.body.assignedToName, leadHistory, req.body.leadId ], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
  });   
});

function getFormatedDate(){
  const dateObj = new Date();
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return date + '-' + month + '-' + year;
}

function appendLeadhistory(assignee, userId, leadData) {
  console.log('appendLeadhistory ====> ', assignee, userId);
	return getFormatedDate() + ':' + leadData.assignedToName + ' (' + leadData.assignedTo + ') assigned to ' + assignee + ' (' + userId + ')';
}

function getleadDetails (leadId) {
  return new Promise((resolve) => {
    connection.query('select * from leads WHERE leadId=?',[leadId], function (error, results, fields) {
      if (error) throw error;
      resolve(results);
  });
 });
}