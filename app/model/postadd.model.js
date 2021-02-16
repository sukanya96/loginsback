module.exports = (sequelize, Sequelize) => {
	const PostAdd = sequelize.define('postadd', {
	
		advimage: {type: Sequelize.TEXT}, 
		
	});
	
	return PostAdd;
}
