const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/*", cors() ,async (req, res) =>{
})

app.get("/service", cors, async (req, res)=>{

})
app.get("/about", cors, async (req, res)=>{
    
})
app.get("/contact", cors, async (req, res)=>{
    
})
app.get("/jobs", cors, async (req, res)=>{
    
})
app.get("/basic", cors, async (req, res)=>{
    
})
app.get("/smallbuss", cors, async (req, res)=>{
    
})
app.get("/meduim", cors, async (req, res)=>{
    
})
app.get("/appwebsite", cors, async (req, res)=>{
    
})
app.get("/support", cors, async (req, res)=>{
    
})
app.get("/reportbug", cors, async (req, res)=>{
    
})



app.listen(port, () =>{
    console.log(`listening at http:localhost:${port}`)
})