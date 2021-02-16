module.exports = (sequelize, Sequelize) => {
	const Role = sequelize.define('roles', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  fullname: {
		  type: Sequelize.STRING
	  }
	});
	
	return Role;
}

