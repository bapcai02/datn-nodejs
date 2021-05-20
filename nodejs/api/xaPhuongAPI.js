const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class XaPhuong extends Model {}

XaPhuong.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    maqh: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'vn_xaphuongthitrans'});

/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @response xaphuong
 */
exports.index = async (req, res, next) => {
    await XaPhuong.findAll()
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
     if (data.name && data.type && data.maqh) {
         const check = await XaPhuong.findOne({ where: { matp: data.matp,  name: data.name} });   
         if(check !== null){
             res.status(401).json({
                 status: '401',
                 message: 'data already exists!'
             });
         }else{
             await XaPhuong.create({
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
     if (data.name && data.maqh && data.id) {
         await XaPhuong.update({
             'name': data.name,
             'matp': data.maqh
         }, {
             where: { id: data.id }
         }).then(xaphuong => {
             res.status(200).json(xaphuong);
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
         await XaPhuong.destroy({
             where: {
                 id: data.id
             }
         }).then(xaphuong => {
             res.status(200).json({
                message: "delete success",
                data: xaphuong
             });
         }).catch(ExclusionConstraintError => {
             res.status(400).json(ExclusionConstraintError);
         });
     } else {
         res.status(400).json('data is not valid');
     }
 }