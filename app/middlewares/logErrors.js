//
// Log Errors
//

module.exports = function(err, req, res, next) {
    console.log(err.stack);
    next(err);
};
