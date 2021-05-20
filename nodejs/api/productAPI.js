const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Product extends Model {}

Product.init({
    category_id: DataTypes.INTEGER,
    brand_id : DataTypes.INTEGER,
    seller_id : DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    slug: DataTypes.STRING,
    product_desc: DataTypes.STRING,
    product_content : DataTypes.STRING,
    product_price : DataTypes.FLOAT,
    sale : DataTypes.STRING,
    product_status : DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'products'});