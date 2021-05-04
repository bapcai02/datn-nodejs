var sql = require('mysql');

var con = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
});

// module.exports = db;