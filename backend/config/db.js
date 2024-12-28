import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://Ronaknayak01:Nayakronak@cluster0.0mb7l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("DB connected"));
};
