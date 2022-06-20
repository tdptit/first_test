import pool from "../config/connectDB"


let apiController = async (req,res) => {

    let [rows,fiels] = await pool.execute("select *from users")
    return res.status(200).json({
        mesage : "ok",
        list : rows
    })
} 

let CreateNewUser =async (req,res) => {
    //let [fname,lname,email,address] = req.body
    let {fname,lname,email,address} = req.body
    
    if(!fname || !lname || !email || !address)
    {
        return res.status(200).json({
            mesage : "No die can win"
        })
    }

    await pool.execute('insert into users (fname,lname,email,address) values (?,?,?,?)', [fname,lname,email,address])
    //await pool.execute("insert into users(fname,lname,email,address) values (?,?,?,?) " ,[fname,lname,email,address])

    return res.status(200).json({
        mesage : "ok"
    })
}

module.exports = {
    apiController, CreateNewUser
}
