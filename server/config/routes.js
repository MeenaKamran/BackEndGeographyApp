var countries = require('./../controllers/countries.js');
module.exports = function(app) {

	app.get("/all_countries", function(req, res){
		console.log("in routes");
		countries.getAll(req, res);
	});

	app.get("/NorthAmerica", function(req, res){
		console.log("in routes");
		countries.getNorthAmerica(req,res);
	});

	app.get("/SouthAmerica", function(req, res){
		console.log("in routes");
		countries.getSouthAmerica(req,res);
	});

	app.get("/Europe", function(req, res){
		console.log("in routes");
		countries.getEurope(req,res);
	});

	app.get("/Asia", function(req, res){
		console.log("in routes");
		countries.getAsia(req,res);
	});

	app.get("/Oceana", function(req, res){
		console.log("in routes");
		countries.getOceana(req,res);
	});

	app.get("/Africa", function(req, res){
		console.log("in routes");
		countries.getAfrica(req,res);
	});

}