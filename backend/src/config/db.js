import mongoose from 'mongoose';


export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully!");
    }
    catch(err){
        console.error("Error connecting to database: ",err);
        process.exit(1);
    }
}

