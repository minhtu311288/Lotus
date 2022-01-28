const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController');

router.get('/:slug', siteController.details);
router.get('/', siteController.index);

module.exports = router;