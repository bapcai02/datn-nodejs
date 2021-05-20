const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Rating extends Model {}

Rating.init({
    product_id: DataTypes.INTEGER,
    user_id : DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    message: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'ratings'});