const express = require('express'); //commonjs
const app = express(); //app express
const PORT = 8080 //port

//khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Home page')
})

app.get('/html', (req, res) => {
    res.send('<h1>HTML</h1>')
})
//Chay server
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});