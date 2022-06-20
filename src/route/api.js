import express from "express";
import homeController from "../controller/homeController"

let router = express.Router();

const initWebRoute = (app) =>{

    router.get('/index',homeController.getHomepage)
    router.get('/detail/user/:userId',homeController.getDetailPage)
    router.get('/create-user',homeController.createUser)
    router.post('/delete-user',homeController.deleteUser)
    router.get('/update-user/:id',homeController.editUser)
    router.post('/update',homeController.updateUser)
    router.post('/create',homeController.themUser)
    router.get('/hello', (req, res) => {
        res.send("Hello")
      })

      return app.use('/',router)
}

module.exports = initWebRoute