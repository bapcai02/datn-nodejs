
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, 
{
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
  role_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  created_at: DataTypes.TIME,
  updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false,updatedAt: false, modelName: 'users' });


try {
   

    sequelize.authenticate();
    console.log('Connection has been established successfully.');
        User.findAll()
        .then(users => {
        console.log(users);
      })
   
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;