const mongoose=require("mongoose")


const File=new mongoose.Schema({
    path:{
        type:String,
        require:true

    },
    originalName: {
        type:String,
        require:true

    },
    password :String,
    downloadCount:{
        type:Number,
        require: true,
        default:0
        
    }
})

module.exports= mongoose.model("File",File)