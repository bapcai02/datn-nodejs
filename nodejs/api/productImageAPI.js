const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class ProductImage extends Model {}

ProductImage.init({
    product_id : DataTypes.INTEGER,
    image: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'product_images'});