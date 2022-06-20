import { render } from "express/lib/response"
import pool1 from "../config/connectDB"
let getHomepage = async (req,res) =>{

    const [rows, fields] = await pool1.execute('select *from users')
    return res.render('index.ejs', {dataUser : rows})
}   

let getDetailPage =  async (req,res) =>{
    let userId = req.params.userId
    let [user] = await pool1.execute('select * from users where id = ?', [userId])
    console.log("Check req params : " , req.params)
    return res.send(JSON.stringify(user))
}

let createUser = async (req,res) => {
    return res.render('create-user.ejs')
    
}

let deleteUser =async (req,res) =>{
    //let {fname,lname,email,address} = req.body
    let a = 3;
    console.log(req.body)
    //confirm("B co muon xoa khong")
    await pool1.execute('delete from users where id = ?',[req.body.userId])
    return res.redirect('/index')
    //return res.send("Chao")
}

let editUser = async (req, res) => {
    console.log("Check id <<<<<" ,req.params)
    let [data] = await pool1.execute('select * from users where id =?', [req.params.id]);
    console.log('Check data >>>>', data)

    return res.render('update-user.ejs',{dataUser : data[0]})
} 

let updateUser =  async (req,res) =>{
    console.log("check update : ", req.body)
    let {fname,lname,email,address,id} = req.body
    await pool1.execute('update users set fname =?, lname =?, email =?, address =? where id =?',[fname,lname,email,address,id])
    return res.redirect('/index')
}

let themUser = async (req,res) => {
    console.log("Check them >>>>" , req.body)
    let {fname,lname,email,address} = req.body
    await pool1.execute('insert into users (fname,lname,email,address) values (?,?,?,?)', [fname,lname,email,address])
    return res.redirect('/index')
}

module.exports = {
    getHomepage,getDetailPage,createUser,deleteUser,editUser,updateUser,themUser
    
}