//Connect the orm export
const orm = require('../config/orm');

//Calls the ORM functions using burger specific input
let burger = {
   addBurger: function(vals, cb) {
       orm.addBurger(vals, (response) => {
           cb(response);
       });
   },
   updateBurger: function(vals, objColVals, cb) {
       orm.updateBurger(vals, objColVals, (response) => {
           cb(response);
       });
   },
   selectAll: function(cb) {
        orm.addBurger((response) => {
            cb(response);
        }); 
   }
}

//Export Burger
module.exports = burger;
