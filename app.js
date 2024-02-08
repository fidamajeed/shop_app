const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const shpRoute=require("./controller/shpRouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://fidamajeed:fida3015@cluster0.4jvsmni.mongodb.net/shpDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)
app.use("/api/shp",shpRoute)

app.listen(3009,()=>{
    console.log("server running")
})