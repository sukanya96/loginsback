
var express = require('express'); 
const authJwt = require('./verifyJwtToken');

let profile = require('../config/profile.js'); 


var app = express();
module.exports = function(app) {

	const controller = require('../controller/controller.js');
	
	//Register
	app.post('/api/auth/signup', controller.signup);

	//Get UserProfile to be updated
	app.put('/api/file/profileupdate', [authJwt.verifyToken], controller.updateProfile);

	//Logged IN/
	app.post('/api/auth/signin', controller.signin);

	 //Get Registered User Name && profile info
	 app.get('/api/userview',[authJwt.verifyToken], controller.userview);

	 // Profiles to be saved
	app.post('/api/file/profile', profile.array("file"), controller.profile);

	 //Posting Advertisement by User
	app.post('/api/postadvertisement', controller.postadvertisement);
	
	//Getting Advertisement by User
	app.get('/api/get/postadvertisement', controller.Getpostadvertisement);

	
}
