const newsRouter = require('./news');
const loginRouter = require('./login');
const siteRouter = require('./site');
const profileRouter = require('./profile');
const miniGameRouter = require('./mini-game');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/mini-game', miniGameRouter);
    app.use('/login', loginRouter);
    app.use('/getprofile', profileRouter);
    app.use('/', siteRouter);
}
module.exports = route;
