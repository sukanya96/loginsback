module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('product', {

		imgbase: {type: Sequelize.TEXT},
		
});
	return Product;
}	