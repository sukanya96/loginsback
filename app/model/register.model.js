module.exports = (sequelize, Sequelize) => {
	const Register = sequelize.define('registers', {
	
		fullname: {type: Sequelize.STRING},
		email: {type:Sequelize.STRING},

	});
	
	return Register;
}
