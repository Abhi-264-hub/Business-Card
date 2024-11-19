const express=require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
const {createcard,updatecard}=require("./type")
const {card}=require("./db")
app.post("/card",async(req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createcard.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong Inputs"
        })
        return
    }
    await card.create({
    Name:createPayload.Name,
    Aboutme:createPayload.Aboutme,
    Interests:createPayload.Interests,
    Linkedin:createPayload.Linkedin,
    Twitter:createPayload.Twitter
    })
    res.json({
        msg:"Card Created"
    })


})
app.get("/cards",async(req,res)=>{
    try {
        const cards = await card.find({}).lean(); // Use `lean()` to return plain JavaScript objects
        res.json({ cards });
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving cards", error });
    }
})
app.put("/cardid",async(req,res)=>{
    const updatePayload=req.body;
    const parsedPayloadu=updatecard.safeParse(updatePayload)
    if(!parsedPayloadu.success){
        res.status(411).json({
            msg:"Wrong Inputs"
        })
        return
    }
    try {
        const { id } = updatePayload;  // Extract the id from the payload
        const updatedCard = await card.findOneAndUpdate(
            { _id: id },  // Search criteria
            { $set: { Name: "Anonymous" } },  // The fields to update
            { new: true }  // Return the updated document
        );

        if (!updatedCard) {
            return res.status(404).json({ msg: "Card not found" });
        }

        res.json({ msg: "Card Updated", updatedCard });
    } catch (error) {
        res.status(500).json({ msg: "Error updating card", error });
    }
})
app.delete("/cardids",async(req,res)=>{
    const updatePayload=req.body;
    const parsedPayloadd=updatecard.safeParse(updatePayload)
    if(!parsedPayloadd.success){
        res.status(411).json({
            msg:"Wrong Inputs"
        })
        return
    }
    try {
        const { id } = updatePayload;
        const deletedCard = await card.findByIdAndDelete(id);
        
        if (!deletedCard) {
            return res.status(404).json({ msg: "Card not found" });
        }

        res.json({ msg: "Card deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting card", error });
    }

})
app.get("/cardsGetById", async (req, res) => {
    const updatePayload = req.body;
    console.log("Update Payload:", updatePayload); // Log the payload console.log("ID from Payload:", updatePayload.id); // Log the ID

    const parsedPayload = updatecard.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({ msg: "Wrong Inputs" });
        return;
    }
console.log("Update Payload:", updatePayload);
console.log("Parsed Payload:", parsedPayload);
console.log("ID from Payload:", updatePayload.id);


    const { id } = updatePayload;
    try {
        const cards = await card.findById(id).lean(); // Use `findById` and `lean()`
        
        if (!cards) {
            res.status(404).json({ msg: "Card not found" });
            return;
        }

        res.json({ cards });
    } catch (error) {
        console.error("Error finding card by ID:", error);
        res.status(500).json({ msg: "Server error" });
    }
});

app.listen(3000)