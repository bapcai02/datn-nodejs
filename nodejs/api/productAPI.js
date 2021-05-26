const sequelize = require('../app/models/mysql');
const { Model, DataTypes, ExclusionConstraintError } = require('sequelize');

class Product extends Model {}

Product.init({
    category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    slug: DataTypes.STRING,
    product_desc: DataTypes.STRING,
    product_content: DataTypes.STRING,
    product_price: DataTypes.FLOAT,
    sale: DataTypes.STRING,
    product_status: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,

}, { sequelize, createdAt: false, updatedAt: false, modelName: 'products' });

/**
 * get data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @response quanhuyen
 */
exports.index = async(req, res, next) => {
    try {
        const data = await sequelize.query(`SELECT products.*, categories.category_name, brands.brand_name, sellers.shop_name FROM products 
                    JOIN categories ON products.category_id = categories.id 
                    JOIN brands ON products.brand_id = brands.id 
                    JOIN sellers ON products.seller_id = sellers.id `);

        res.json({
            status: 200,
            message: "success",
            data: data[0]
        })


    } catch (ExclusionConstraintError) {
        res.status(400).json({
            status: 400,
            message: ExclusionConstraintError
        });
    }
}