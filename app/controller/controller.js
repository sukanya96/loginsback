const db = require('../config/db.config.js');
const config = require('../config/config.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const mime = require('mime');
const fs = require('fs');

//Declaring Databases
const Register = db.register;
const PostAdd = db.postadd;


//Register
exports.signup = (req, res) => {
console.log("Processing func -> SignUp");
	Register.create({
		fullname: req.body.fullname,
		email: req.body.email,

}).then(Register =>{
	res.status(200).json({
		"description": "Admin Board",
		"Register": Register
	});
}).catch(err => {
	res.send(500).send("Error => " +err);
}).catch(err => {
	res.send(500).send("Fail! Error  => " +err);
})

}


//Login
exports.signin = (req, res) => {
	console.log("Sign-In");

	Register.findOne({
		where: {
			email: req.body.email
		}
	}).then(Register => {
		if (!Register) {
			return res.status(404).send('User Not Found.');
		}

var token = jwt.sign({ id: Register.id }, config.secret, {
			expiresIn: 86400 // expires in 24 hours
		});

		res.status(200).send({ auth: true, accessToken: token });

	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});



}

//EDit Profile

exports.updateProfile = (req, res) => {
	Register.update(
		{
			fullname: req.body.fullname,
			email: req.body.email,
			
		},
		{ where: { id: req.userId } }
	).then(Register => {
		res.status(200).json({
			"description": Register

		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Management Board",
			"error": err
		});
	})

}


//Get Name of User in sidebar
exports.userview = (req, res) => {
	Register.findOne({
		where: { id: req.userId },
		attributes: ['id', 'fullname', 'email'],
		// include: [{
		
		// 	attributes: ['name'],

		// }]
	}).then(Register => {
		res.status(200).json({
			"description": "User Content Page",
			"Register": Register
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access User Page",
			"error": err
		});
	})
}
//Get User-Profile

exports.profile = (req, res) => {
	res.send('profile uploaded successfully!');

}


//USER ADVERTISEMENT

//User Post Product to be saved in to database
exports.postadvertisement = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Adding Products");
	let advimage = req.body.advimage;
	let filename = "products/" + Date.now().toString() + ".png";
	if (advimage) {
		let arr = advimage.split(',');
		//let arrtemp = arr[0].split('/');
		fs.writeFile(filename, arr[1], 'base64', function (err) {
			if (err){

			}
			else{

			}
		})
	}
	PostAdd.create({
		
		advimage: filename,
		

	}).then(postadd => {

		res.status(200).json({
			"description": "User Posted Product Successfully..!",
			//"postadd": postadd
		});
	}).catch(err => {
		res.status(500).json({
			"description": "User Failed to Post Product..!",
			"error": err
		});
	})
}

exports.Getpostadvertisement = (req, res) => {
	PostAdd.findAll({

		attributes: [ 'advimage'],
	}).then(postadd => {
		res.status(200).json({
			"description": "Got Your Products User...!",
			postadd
		});
	}).catch(err => {
		res.status(500).json({
			"description": " Can't Got Your Products User...!",
			"error": err
		});
	})
}



//Product Pushing Saving Array
exports.productss = (req, res) => {
	res.status(200).json({
		"description": "Product saved into Folder",


	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Product Page",
			"error": err
		});
	})
}