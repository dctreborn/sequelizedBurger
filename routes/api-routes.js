var db = require("../models");

module.exports = function(app) {

	var Burger = db.Burger;

    app.get("/", function(req, res) {
    	Burger.findAll({}).then(function(dbBurger){
    		var hbsObj = {
			burgers: dbBurger
		};

		res.render("index", hbsObj);
    	});
    });

    app.post("/", function(req, res){
    	Burger.create({
    		burger_name: req.body.burger_name,
    		devoured: req.body.devoured
    	}).then(function(dbBurger){
    		res.redirect("/");
    	});
    });

    app.put("/:id", function(req, res){
    	Burger.update(
    		req.body,
    		{
    		where: {
    			id: req.params.id
    		}
    	}).then(function(dbBurger){
    		res.redirect("/");
    	});
    });
};