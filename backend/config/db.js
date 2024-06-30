import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Admin:Awadhesh2004@cluster0.pskhgqi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}