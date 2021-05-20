const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Coupon extends Model {}

Coupon.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    feature: DataTypes.INTEGER,
    discount_number: DataTypes.DOUBLE,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'coupons'});