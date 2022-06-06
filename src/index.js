import express from "express"
import configViewEngine from "./config/viewEngine"
import path from "path"
require('dotenv').config()
import initWebRoute from "./route/web"
//import connectiondb from "./configs/connectDB"



const app = express()
const port = process.env.POST || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('Start >> ' + port)
configViewEngine(app);
initWebRoute(app);
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
}
)