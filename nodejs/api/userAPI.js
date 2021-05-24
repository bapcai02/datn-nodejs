const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');
const { databaseVersion } = require('../app/models/mysql');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

class User extends Model {}
User.init({
    role_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'users' });

exports.index = async(req, res, next) => {
    const user = await User.findAll();
    res.json(user);
}

exports.update = async(req, res, next) => {
    const data = req.body;
    if (data.name && data.email && data.id) {
        try{
            console.log(data)
            await User.update({
                name: data.name,
                email: data.email,
            }, { where: { id: data.id }
            });
            const user = await User.findAll({where: {id: data.id}});
            res.status(200).json(user);
        }catch(ExclusionConstraintError){
            res.status(400).json(ExclusionConstraintError);
        }
    } else {
        res.status(400).json('data is not valid');
    }
}

exports.create = async(req, res, next) => {
    const data = req.body;
    if (data.name && data.role_id && data.email && data.password) {
        
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(data.password, salt);
        // var res = bcrypt.compareSync('B4c0/\/', hash)
        await User.create({
            'role_id': data.role_id,
            'name': data.name,
            'email': data.email,
            'password': hash
        }).then(user => {
            res.status(200).json(user);
        }).catch(ExclusionConstraintError => {
            res.status(400).json(ExclusionConstraintError);
        })
    } else {
        res.status(400).json('data is not valid');
    }
}

exports.delete = async(req, res, next) => {
    const data = req.body;
    if (data.id) {
        console.log(data)
        await User.destroy({
            where: {
                id: data.id
            }
        }).then(user => {
            res.status(200).json(data.id);
        }).catch(ExclusionConstraintError => {
            res.status(400).json(ExclusionConstraintError);
        });
    } else {
        res.status(400).json('data is not valid');
    }
}