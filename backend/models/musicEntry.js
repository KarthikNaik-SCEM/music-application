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
    // uploaderName:{
    //     type:String,
    //     required:true
    // },
    dateOfUpload:{
        type:Date,
        default:Date.now
    },
    // noOfSaves:{
    //     type:Number,
    //     required:true
    // },
    isPublic:{
        type:Boolean,
        required:true
    }
})


const MusicEntry=mongoose.model("musicEntry",musicSchema);

export default MusicEntry