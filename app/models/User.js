const sequelize = require('./mysql');
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

module.exports = User;
