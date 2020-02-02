const connection = require('./connection');

// ?? indicate a table name or a table column name
// ? indicates an input from the user

let orm = {
    addBurger: function(tableInput) {
        const queryString = 'INSERT burgers (burger_name) VALUES ?'
        connection.query(queryString, [tableInput], function(error, result) {
            if(error) throw error;
            console.log(result);
        });
    },
    eatBurger: function()
    //this is called when as a result of an on click from the user
}