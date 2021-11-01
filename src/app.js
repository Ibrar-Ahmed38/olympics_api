const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('./Db/Conn')
const MensRanking = require("./Models/Users")
app.use(express.json())



app.get("/" , async(req,res)=>{
    res.send("This is a Home page")
})

app.post("/mens" , async(req,res)=>{

    const addMens = await new MensRanking(req.body)
    console.log(addMens)
     const addMany = await addMens.save()
})


app.get("/mens" , async(req,res)=>{

    const getMens =  await MensRanking.find({})
    res.send(getMens)
})


app.get("/mens/:id", async(req,res)=>{
  
  try{
        const _id = req.params.id
        const getMan = await  MensRanking.findById({_id})
        res.send(getMan)
    }catch(err){
        res.send(err)
    }

})


app.patch("/mens/:id", async (req,res)=>{
    const _id = req.params.id
    const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
        new : true
    })
    
    res.send(updateMen)
})

app.delete("/mens/:id", async(req,res)=>{
    const deleteID = await MensRanking.findByIdAndDelete(req.params.id)
    res.send(deleteID)
})

app.listen(port, ()=>{
    console.log(`Server is Running http:localhost:${port}`)
})