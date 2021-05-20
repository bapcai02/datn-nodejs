const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Cart extends Model {}

Cart.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    sale: DataTypes.DOUBLE,
    price:DataTypes.DOUBLE,
    image:DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, { sequelize, createdAt: false, updatedAt: false, modelName: 'carts'});