var brand = [];
exports.update = exports.create = function(key, title, body) {
    brand[key] = { title: title, body: body };
}

exports.read = function(key) {
    return brand[key];
}

exports.destroy = function(key) {
    delete brand[key];
}

exports.keys = function() {
    return Object.keys(brand);
}