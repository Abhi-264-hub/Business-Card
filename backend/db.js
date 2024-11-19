const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://fesports127:7GRypBNwbxmyGZAE@cluster0.m7g9j.mongodb.net/cards")
const cardSchema=mongoose.Schema({
    Name:String,
    Aboutme:String,
    Interests:String,
    Linkedin:String,
    Twitter:String
})
const card=mongoose.model('cards',cardSchema)
module.exports={
    card
}