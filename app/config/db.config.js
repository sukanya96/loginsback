const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize = sequelize;

db.register = require('../model/register.model')(sequelize, Sequelize);
db.role = require('../model/role.js')(sequelize, Sequelize);
db.role.belongsToMany(db.register, { through: 'register_roles', foreignKey: 'roleId', otherKey: 'registerId'});
db.register.belongsToMany(db.role, { through: 'register_roles', foreignKey: 'registerId', otherKey: 'roleId'});
db.postadd = require('../model/PostAdd.model.js')(sequelize, Sequelize);

module.exports = db;