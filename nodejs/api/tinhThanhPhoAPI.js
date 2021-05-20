const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class TinhThanh extends Model {}

TinhThanh.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'vn_tinhthanhphos'});

/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.index = async (req, res, next) => {
    await TinhThanh.findAll()
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
  * create data 
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 exports.create = async(req, res, next) => {
     const data = req.body;
     if (data.name && data.type) {
         const check = await TinhThanh.findOne({ where: { name: data.name} });   
         if(check !== null){
             res.status(401).json({
                 status: '401',
                 message: 'data already exists!'
             });
         }else{
             await TinhThanh.create({
                 'name': data.name,
                 'type': data.type,
             }).then(tinhthanh => {
                 res.status(200).json({
                     status: 200,
                     data: tinhthanh
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
  * update data 
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 exports.update = async(req, res, next) => {
     const data = req.body;
     if (data.name && data.id) {
         await TinhThanh.update({
             'name': data.name,
         }, {
             where: { id: data.id }
         }).then(tinhthanh => {
             res.status(200).json(tinhthanh);
         }).catch(ExclusionConstraintError => {
             res.status(400).json(ExclusionConstraintError);
         })
     } else {
         res.status(400).json('data is not valid');
     }
 }
 
 /**
  * delete data 
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 exports.delete = async(req, res, next) => {
     const data = req.body;
     if (data.id) {
         await TinhThanh.destroy({
             where: {
                 id: data.id
             }
         }).then(tinhthanh => {
             res.status(200).json({
                 message: "delete success",
                 data: tinhthanh
             });
         }).catch(ExclusionConstraintError => {
             res.status(400).json(ExclusionConstraintError);
         });
     } else {
         res.status(400).json('data is not valid');
     }
 }