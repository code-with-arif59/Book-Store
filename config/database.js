import mongoose from "mongoose";

export async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected☑️😊");
    }
    catch(er){
        console.log("Database Connection Failed❌");
    }
}