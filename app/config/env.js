const env = {
    database: 'startup_database',
    username: 'root',
    password: 'suk241996',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;