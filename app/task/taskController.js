var connection = require('../lib/database').connection;

module.exports = {
    getTask: function (req, res) {
        //  finding all the task 
        connection.query('SELECT * FROM mobiles', function (err, result, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json({ code: "taskNotFound", message: "error in database while finding task" });
            }
            res.status(200).json({ data: result });
        });
    },
};