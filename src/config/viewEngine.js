import express from "express";
//import path from "path"
const path = require('path')
const configViewEngine = (app1) => {
    //app1.use(express.static("./src/public"))
    // app1.use('/static', express.static(path.join(__dirname, 'public')))
    app1.use( express.static(path.join(__dirname, '../public')))
    app1.set("view engine" ,"ejs")
    //app1.set("views", "./src/views")
    app1.set("views", path.join(__dirname, '../views'))
}

export default configViewEngine;