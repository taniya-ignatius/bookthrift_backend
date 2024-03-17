const express=require("express")
const adminModel=require("../models/AdminModel")
const userModel=require("../models/UserModel")

const router=express.Router()

router.get("/viewregisteredusers",async(req,res)=>{

    let data = await userModel .find()
    res.json(data)

})




module.exports=router