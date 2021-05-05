/* package */

/* model */

exports.index = function(req, res, next) {
    res.render('pages/index', { title: 'Express' });
}