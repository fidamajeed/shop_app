const mongoose=require("mongoose")
const shopschema=mongoose.Schema(
    {

        item:String,
        price:String,
        quantity:String,
        total:String

    }
)
module.exports=mongoose.model("shop_app",shopschema)