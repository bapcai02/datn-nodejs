const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Seller extends Model {}

Seller.init({
    customer_id: DataTypes.INTEGER,
    shop_info: DataTypes.STRING,
    shop_name: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'sellers'});