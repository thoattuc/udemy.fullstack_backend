//import path from "path";
const path = require("path");
const express = require("express");

const configViewEngine = (app) =>{
    console.log(">>> check __dirname:", __dirname);
    app.set('views', path.join(__dirname,'../views'));
    app.set('view engine', 'ejs')
    app.use(express.static(path.join(__dirname,'../public')));
}

module.exports = configViewEngine;