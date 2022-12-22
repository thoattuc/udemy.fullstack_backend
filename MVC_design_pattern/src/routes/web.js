const express = require('express');
const router = express.Router();

//Create router
router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/home', (req, res) => {
    res.send('Home page')
})

router.get('/ejs', (req, res) => {
    res.render('index.ejs')
});

module.exports = router; //export default