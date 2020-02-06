//Dependencies
const express = require("express");
const router = express.Router();

// Connect burgers model
const burger = require("../models/burgers");

//Router

//Home page (GET) - select all info from the burgers table & display on the home page
router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        let handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });
});

//Add a burger (POST) - add a burger to the burgers database
router.post("/api/burgers", (req, res) => {
    burger.addBurger([
        "burgerName"
    ], [
        req.body.burgerName
    ], function(result) {
        //returns the ID of the new burger that was added
        res.json({ id: result.insertId });
    });
});

//Update or Edit a burger input (PUT)
router.put("/api/burgers/:id", (req, res) => {
    let objColVals = req.params.id;
    
    burger.updateBurger({
        devoured: red.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});




//Export Router
module.exports = router;
