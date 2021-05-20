const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Employer extends Model {}

Employer.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    date: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'employer'});