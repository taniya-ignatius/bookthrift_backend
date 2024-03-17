const mongoose=require("mongoose")
const adminSchema=new mongoose.Schema({
    bookid:String,
    bookname:String,
    bookgenre:String,
    bookauthor:String,
    bookpublisher:String,
    publishedyear:Number,
    bookstatus:String,
    bookprice:Number
})
module.exports=mongoose.model("books",adminSchema)