const LoginRepository = require('../repository/repositories/LoginRepository');

/**
 * login
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.login = (req, res, next) => {
    res.render('pages/auth/login', { title: 'login' });
}

/**
 * p_login
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.p_login = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    
    const users = LoginRepository.checkUser;

    res.json(JSON.stringify(users.dataValues, null, 2));
}