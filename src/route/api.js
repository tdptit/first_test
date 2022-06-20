import express from "express";
import apiController1 from "../controller/APIController"

let router = express.Router();

const initAPIRoute = (app) =>{

    router.get('/users',apiController1.apiController);
    router.post('/create-user',apiController1.CreateNewUser)
    router.put('/update-user',apiController1.UpdateUser)
    router.delete('/delete-user',apiController1.DeleteUser)
      return app.use('/api/v1/',router)
}

export default initAPIRoute