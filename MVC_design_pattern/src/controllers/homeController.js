const helloWorld = (req, res) => {
    res.send('Hello World!')
}

const getHomepage = (req,res) => {
    res.send('Home page!');
}

const getEjs = (req,res) => {
    res.render('index.ejs')
}

module.exports = {
    helloWorld,
    getHomepage,
    getEjs
}