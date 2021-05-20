const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Category extends Model {}

Category.init({
    category_name: DataTypes.STRING,
    category_description: DataTypes.STRING,
    category_status: DataTypes.INTEGER,
    category_slug: DataTypes.STRING,
    category_keyword: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'categories'});