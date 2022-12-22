const { getHomepage, getEjs, helloWorld } = require('../controllers/homeController');
const express = require('express');
const router = express.Router();


//Create router
router.get('/', helloWorld);

router.get('/home', getHomepage);

router.get('/ejs', getEjs);

module.exports = router; //export default