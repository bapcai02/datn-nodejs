const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class QuanHuyen extends Model {}

QuanHuyen.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    matp: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'vn_quanhuyen'});

/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @response quanhuyen
 */
exports.index = async (req, res, next) => {
   await QuanHuyen.findAll()
    .then(data => {
        res.status(200).json({
            status: 200,
            message: "success",
            data : data
        });
    }).catch(ExclusionConstraintError => {
        res.status(400).json({
            status: 400,
            message: ExclusionConstraintError
        });
    })
}

/**
 * create data quanhuyen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = async(req, res, next) => {
    const data = req.body;
    if (data.name && data.type && data.matp) {
        const check = await QuanHuyen.findOne({ where: { matp: data.matp,  name: data.name} });   
        if(check !== null){
            res.status(401).json({
                status: '401',
                message: 'data already exists!'
            });
        }else{
            await QuanHuyen.create({
                'name': data.name,
                'type': data.type,
                'matp': data.matp
            }).then(quanhuyen => {
                res.status(200).json({
                    status: 200,
                    data: quanhuyen
                });
            }).catch(ExclusionConstraintError => {
                res.status(400).json(ExclusionConstraintError);
            })
        }
    } else {
        res.status(400).json('data is not valid');
    }
}

/**
 * update data quanhuyen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.update = async(req, res, next) => {
    const data = req.body;
    if (data.name && data.matp && data.id) {
        await QuanHuyen.update({
            'name': data.name,
            'matp': data.matp
        }, {
            where: { id: data.id }
        }).then(quanhuyen => {
            res.status(200).json(quanhuyen);
        }).catch(ExclusionConstraintError => {
            res.status(400).json(ExclusionConstraintError);
        })
    } else {
        res.status(400).json('data is not valid');
    }
}

/**
 * delete data quan huyen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.delete = async(req, res, next) => {
    const data = req.body;
    if (data.id) {
        await QuanHuyen.destroy({
            where: {
                id: data.id
            }
        }).then(quanhuyen => {
            res.status(200).json({
                message: "delete success",
                data: quanhuyen
            });
        }).catch(ExclusionConstraintError => {
            res.status(400).json(ExclusionConstraintError);
        });
    } else {
        res.status(400).json('data is not valid');
    }
}