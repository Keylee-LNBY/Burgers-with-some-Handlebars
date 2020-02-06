const connection = require('./connection');

// ?? indicate a table name or a table column name
// ? indicates an input from the user

let orm = {
    addBurger: (tableInput) => {
        const queryString = 'INSERT burgers (burger_name) VALUES ?'
        connection.query(queryString, [tableInput], (error, result) => {
            if(error) 
                throw error;
            console.log(result);
        });
    },
    updateBurger: (tableInput) => {
        const queryString = 'UPDATE burgers (burger_name) VALUES ?'
        connection.query(queryString, [tableInput], (error, result) => {
            if(error) 
                throw error;
            console.log(result);
        });
    },
    eatBurger: (tableInput) => {
    //this is called when as a result of an on click from the user
        const queryString = 'UPDATE burgers (devoured) VALUES true WHERE id = ?'
        connection.query(queryString, [tableInput], (error, result) => {
            if (error)
                throw error;
            console.log(result);
        });
    },
    selectAll: (tableInput) => {
        
    }
};


//Export for use in other javaScripts
module.exports = orm; 