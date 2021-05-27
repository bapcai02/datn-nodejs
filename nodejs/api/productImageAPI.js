const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class ProductImage extends Model {}

ProductImage.init({
    product_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'product_images' });

/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @response ProductImage
 */
exports.index = async(req, res, next) => {
    await ProductImage.findAll()
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