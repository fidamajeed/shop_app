const express=require("express")
const MovieRouter=require("../model/shpModel")
const router=express.Router()
router.post("/add",async(req,res)=>{
    let data=req.body
    let mov=new MovieRouter(data)
    let rst=await mov.save()
    res.json(
        {
            status:"success"
        }
    )
})
router.get("/view",async(req,res)=>{
   let data=await MovieRouter.find()
   res.json(data)
})

router.post("/srch",async(req,res)=>{
   let input=req.body
    let data=await MovieRouter.find(input)
    res.json(data)
})
module.exports=router