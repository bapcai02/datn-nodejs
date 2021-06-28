const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Employer extends Model {}

Employer.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    date: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'employer'});


/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @response Category
 */
 exports.index = async(req, res, next) => {
    await Employer.findAll()
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