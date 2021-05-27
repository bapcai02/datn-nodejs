const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Brand extends Model {}

Brand.init({
    brand_name: DataTypes.INTEGER,
    brand_description: DataTypes.INTEGER,
    brand_status: DataTypes.STRING,
    brand_slug: DataTypes.INTEGER,
    brand_keyword: DataTypes.DOUBLE,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'brands' });

/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @response Brand
 */
exports.index = async(req, res, next) => {
    await Brand.findAll()
        .then(data => {
            res.status(200).json({
                status: 200,
                message: "success",
                data: data
            });
        }).catch(ExclusionConstraintError => {
            res.status(400).json({
                status: 400,
                message: ExclusionConstraintError
            });
        })
}