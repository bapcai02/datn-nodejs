const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Order extends Model {}

Order.init({
    Order_Code: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    ship_id: DataTypes.INTEGER,
    payment: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'orders'});