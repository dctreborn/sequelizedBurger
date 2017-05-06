var db = require("../models");

module.exports = function(app) {

	var Burger = db.Burger;

    app.get("/", function(req, res) {
    	Burger.findAll({}).then(function(dbBurger){
    		var hbsObj = {
			burgers: data
		};
		console.log(data);
		res.render("index", hbsObj);
    	});
    });

    app.post("/", function(req, res){
    	Burger.create({
    		burger_name: req.body.burger_name
    	}).then(function(dbBurger){
    		res.redirect("/");
    	});
    });

    app.put("/:id", function(req, res){
    	Burger.update({
    		devoured: req.body.devoured
    	}, {
    		where: {
    			id: req.body.id
    		}
    	}).then(function(dbBurger){
    		res.redirect("/");
    	});
    });
};