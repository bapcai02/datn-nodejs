const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class OrderDetail extends Model {}

OrderDetail.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    address: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'order_details'});