require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express(); //app express
const PORT = process.env.PORT || 8080; //port => hardcode # .uat .prod
const HOST_NAME = process.env.HOST_NAME || 'localhost';

//Config view engine & static files
configViewEngine(app);

//Router
app.use('/', webRoutes);



//Chay server
app.listen(PORT, HOST_NAME, () => {
    console.log(`Example app listening on port http://${HOST_NAME}:${PORT}`);
});