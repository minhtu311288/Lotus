class SiteController {
    // GET index
    index (req,res) {
        res.render('home');
    }

    // GET site details
    details (req,res) {
        res.render('site');
    }
}
module.exports = new SiteController;