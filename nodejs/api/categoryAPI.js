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

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'categories' });


/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @response Category
 */
exports.index = async(req, res, next) => {
    await Category.findAll()
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