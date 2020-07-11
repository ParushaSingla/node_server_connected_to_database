var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var database = require('./app/lib/database');
var taskController = require('./app/task/taskController');


// Defining variables
var SERVER_PORT = 5000;

var app = express();


// applying middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Get all mobile resource
app.get('/mobiles',taskController.getTask);



// this wrapper is only for testing purpose
if(!module.parent){
    // staring the express server
    app.listen(SERVER_PORT,function(){
        console.log("Server is listening at port :  ",SERVER_PORT);
    });
}

module.exports = app;




