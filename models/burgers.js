//Connect the orm export
const orm = require('../config/orm.js');

//Calls the ORM functions using burger specific input
let burger = {
   addBurger: function(name, cb) {
       orm.addBurger("burgers", ["burger_name", "devoured"], [name, false], cb);
   },
   updateBurger: function(id, cb) {
       let condition = "id = " + id;

       orm.updateBurger("burgers", {devoured: true}, condition, (response) => {
           cb(response);
       });
   },
   selectAll: function(cb) {
        orm.addBurger("burgers", (response) => {
            cb(response);
        }); 
   }
}

//Export Burger
module.exports = burger;
