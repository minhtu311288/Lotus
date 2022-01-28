
const passport = require('passport');
const jwt = require('jsonwebtoken');
require("../services/LoginService")(passport);
const catchAsync = require("../../utils/catchAsync");

class LoginController {
    // POST login
    login = catchAsync(async (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
            if (err) return next(err); // will generate a 500 error
            if (!user) return res.send({ success: false, message: 'authentication failed' });
            req.login(user, loginErr => {
                if (loginErr) {
                    return next(loginErr);
                }
                const key = 'minhtu';
                const token = jwt.sign(user.toObject(), key);
                console.log("token ",token)
                res.cookie('jwt', token, {
                    signed: true
                });
                return res.send({ success: true, message: 'authentication succeeded', username: user.username });
            });
        })(req, res, next);
    })
}
module.exports = new LoginController;