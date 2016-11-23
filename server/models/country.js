var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var worldCountrySchema = new mongoose.Schema({
	countryName: {type: String},
	countryAbbrev: {type: String},
	capital: {type: String},
	continent: {type: String},
	GeoRectWest: {type: Number},
	GeoRectEast: {type: Number},
	GeoRectNorth: {type: Number},
	GeoRectSouth: {type: Number},
	lat: {type: Number},
	lng: {type: Number},
	countryInfoURL: {type: String},
	flagImageURL: {type: String}
}, {timestamps: true});

var Country = mongoose.model('WorldCountry', worldCountrySchema);