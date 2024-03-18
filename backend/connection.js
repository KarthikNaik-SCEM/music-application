import mongoose from "mongoose";


const connectToDB=async(USERNAME,PASSWORD)=>{
    try {

        const URI=`mongodb+srv://adminuser:shashanka@cluster0.atvoylk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

        await mongoose.connect(URI)

        console.log("Connected to Database");

    } catch (error) {
        console.log("error during connection")
        console.log(error)
        
    }

}

export default connectToDB;
