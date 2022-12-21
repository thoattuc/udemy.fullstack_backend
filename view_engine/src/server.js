const express = require('express'); //commonjs
const path = require('path'); //commonjs
require('dotenv').config();
const app = express(); //app express
const PORT = process.env.PORT || 8080; //port => hardcode # .uat .prod
const HOST_NAME = process.env.HOST_NAME || 'localhost';


//Config template engine
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs')

//Config static files
app.use(express.static(path.join(__dirname,'public')));

//khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Home page')
})

app.get('/ejs', (req, res) => {
    res.render('index.ejs')
})

//Chay server
app.listen(PORT, HOST_NAME, () => {
    console.log(`Example app listening on port http://${HOST_NAME}:${PORT}`);
});