import mongoose from "mongoose"

export async function createDB(){

    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    try {
        mongoose.connect("mongodb+srv://badhri:bbn20@cluster0.ikkffiv.mongodb.net/student-mentor",params)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);  
    }
}
createDB();