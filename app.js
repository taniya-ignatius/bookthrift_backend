const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoute=require("./controllers/UserRouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/user",userRoute)


mongoose.connect("mongodb+srv://Taniya12:TAN12122001@cluster0.vfq897t.mongodb.net/bookDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.listen(3003,()=>{
    console.log("Server is running")
})