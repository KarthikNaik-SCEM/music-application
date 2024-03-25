import mongoose from "mongoose";

const musicSchema=mongoose.Schema({
    musicfile:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    musicTitle:{
        type:String,
        required:true,
        unique:true

    },
    uploaderName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    dateOfUpload:{
        type:Date,
        default:Date.now
    },
    noOfSaves:{
        type:Number,
        required:true,
        default:0
    },
    isPublic:{
        type:Boolean,
        required:true
    }
})


const MusicEntry=mongoose.model("musicEntry",musicSchema);

export default MusicEntry