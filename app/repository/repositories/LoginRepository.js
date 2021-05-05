/** package */
var User = require('../../models/User');

/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
exports.checkUser = async () => {
    await User.findAll()
        .then(users => {
            console.log(users)
            return users;
        }).catch(err => {
            var errs = err.message || "Some error occurred while retrieving tutorials.";
            console.log(errs);
      });
}