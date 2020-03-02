//Installs
const mysql = require('mysql');
let connection;

//Create Connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Iveg0tal0velybunch0fc0c0nuts',
        database: 'burgers_db'
    });
};

//Makes the Connection
connection.connect(function(error) {
    if(error) {
        console.error("Error Connecting to " + error.stack);
        return;
    }
    console.log("Connected with ID: " + connection.threadId);
});

//Export for use in other JS pages
module.exports = connection; 