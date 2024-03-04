import mongoose from "mongoose";


const connectToDB=async(USERNAME,PASSWORD)=>{
    try {

        const URI=`mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.xzfuabx.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`

        await mongoose.connect(URI)

        console.log("Connected to Database");

    } catch (error) {
        console.log("error during connection")
        console.log(error)
        
    }

}

export default connectToDB;
