const express=require("express")
const userModel=require("../models/UserModel")
const bcrypt=require("bcryptjs")
const router=express.Router()



hashPasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}


router.post("/register",async(req,res)=>{
    let{data}={"data":req.body}
    let password=data.password
    const hashedPassword=await hashPasswordgenerator(password)
    data.password=hashedPassword
    let user=new userModel(data)
    let result=await user.save()
    res.json(
        {
            status:"success"
        }
    )
})

router.post("/login",async(req,res)=>{
    let input=req.body
    let emailid=req.body.emailid
    let data=await userModel.findOne({"emailid":emailid})
    
    if (!data) {
        return res.json({
            status:"Invalid user"
        })
    }

    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(inputpassword,dbpassword)
    if (!match) {
        return res.json({
            status:"Incorrect password"
        })
    }
    res.json({
        status:"success","userData":data
    })
})




module.exports=router