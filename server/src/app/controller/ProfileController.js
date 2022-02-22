
const jwt = require('jsonwebtoken');
require('dotenv/config');
const Users = require('../models/User');

class ProfileController {
    // GET profile
    index(req, res, next) {

        const token = req.header('authorization').split(' ')[1];
        // const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token. The token is expired'
                    });
                }
                else {
                    // if everything is good, save to request for use in other routes
                    const username = decoded;
                    Users.find({username})
                        .then(users => {
                            const user = users[0];
                            console.log("user", user);
                            return res.json({ success: true, username: user.username, job: user.job, location: user.location, description: user.description, avatar: user.avatar })
                        })
                        .catch(next);
                }
            });
        } else {
            // if there is no to
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
    }
}
module.exports = new ProfileController;