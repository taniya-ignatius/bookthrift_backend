const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
name:String,
age:String,
designation:String,
address:String,
place:String,
city:String,
state:String,
pincode:String,
emailid:String,
password:String,
mobileno:String
}
)

module.exports=mongoose.model("users",userSchema)