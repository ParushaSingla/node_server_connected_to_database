var mysql      = require('mysql');

// creating a database connection
var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'mobile_app'
});
connection.connect();

module.exports = {
    connection : connection
};
