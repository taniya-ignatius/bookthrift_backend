const express=require("express")
const adminModel=require("../models/AdminModel")
const userModel=require("../models/UserModel")

const router=express.Router()

router.get("/viewregisteredusers",async(req,res)=>{

    let data = await userModel .find()
    res.json(data)

})

router.post("/addbooks",async(req,res)=>{
    let data=req.body
    let newbooks=new adminModel(data)
    let result=await newbooks.save()
    res.json({
        status:"success"
    })
})


module.exports=router