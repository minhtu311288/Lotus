const News = require('../models/News');
const { multiMogoToObject, mogooseToObject } = require('../../utils/mongoose');

class NewsController {
    // GET news
    index(req, res, next) {
        News.find({})
            .then(news => res.render('news',{ news : multiMogoToObject(news) }))
            .catch(next);
    }

    // GET new details
    show(req, res, next) {
        News.findOne({ slug: req.params.slug })
            .then(news => res.render('newsdetails',{ news : mogooseToObject(news) }))
            .catch(next);
    }
}
module.exports = new NewsController;