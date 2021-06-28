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

exports.update = async(req, res, next) => {
    const data = req.body;
    if (data.name && data.email && data.id) {
        try {
            await Category.update({
                name: data.name,
                email: data.email,
            }, {
                where: { id: data.id }
            });
            const user = await User.findAll({ where: { id: data.id } });
            res.status(200).json(user);
        } catch (ExclusionConstraintError) {
            res.status(400).json(ExclusionConstraintError);
        }
    } else {
        res.status(400).json('data is not valid');
    }
}

exports.create = async(req, res, next) => {
    try{
        const data = req.body;
        if (data.name && data.role_id && data.email && data.password) {
            var salt = await bcrypt.genSalt(10);
            var hash = await bcrypt.hash(data.password, salt);
            // var res = bcrypt.compareSync('B4c0/\/', hash)
            await Category.create({
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
    }catch(ExclusionConstraintError){
        res.status(400).json(ExclusionConstraintError);
    }
}

exports.delete = async(req, res, next) => {
    try{
        const data = req.body;
        if (data.id) {
            await Category.destroy({
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
    }catch(ExclusionConstraintError){
        res.status(400).json(ExclusionConstraintError);
    }
}

exports.search = async(req, res, next) => {
    try {
        const data = req.body;
        const user = await Category.findAll({
            where: {
                [Op.or]: [{
                    'name': data.name
                }, { 'email': data.email }]

            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json('failse')
    }
}