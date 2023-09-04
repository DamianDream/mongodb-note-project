import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB -connected");
    } catch (error) {
        throw new Error("Failed connect MongoDB")
    }
};

export default connectMongoDB;