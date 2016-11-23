var mongoose = require('mongoose');
var Country = mongoose.model('WorldCountry');

module.exports = (function() {
	return {
		getAll: function(req, res){
			Country.find({}, function (err, results) {
				if (err) {
					console.log("error retrieving all countries ", err);
				} else {
					// console.log("successfully retrieved all countries: ", results);
					res.json(results);
				}
			})
		},

		getNorthAmerica: function(req, res){
			Country.find({continent:"North America"}, function (err, results) {
				if (err) {
					console.log("error retrieving North American countries ", err);
				} else {
					// console.log("successfully retrieved all North American countries: ", results);
					res.json(results);
				}
			})
		},

		getSouthAmerica: function(req, res){
			Country.find({continent:"South America"}, function (err, results) {
				if (err) {
					console.log("error retrieving South American countries ", err);
				} else {
					console.log("successfully retrieved all South American countries: ", results);
					res.json(results);
				}
			})
		},

		getEurope: function(req, res){
			Country.find({continent:"Europe"}, function (err, results) {
				if (err) {
					console.log("error retrieving European countries ", err);
				} else {
					// console.log("successfully retrieved all European countries: ", results);
					res.json(results);
				}
			})
		},

		getAsia: function(req, res){
			Country.find({continent:"Asia"}, function (err, results) {
				if (err) {
					console.log("error retrieving Asian countries ", err);
				} else {
					// console.log("successfully retrieved all Asian countries: ", results);
					res.json(results);
				}
			})
		},

		getOceana: function(req, res){
			Country.find({continent:"Australia & Oceana"}, function (err, results) {
				if (err) {
					console.log("error retrieving Australian & Oceana countries ", err);
				} else {
					// console.log("successfully retrieved all Australian & Oceana countries: ", results);
					res.json(results);
				}
			})
		},

		getAfrica: function(req, res){
			Country.find({continent:"Africa"}, function (err, results) {
				if (err) {
					console.log("error retrieving African countries ", err);
				} else {
					// console.log("successfully retrieved all African countries: ", results);
					res.json(results);
				}
			})
		}
	}

}) ();