import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // If the database is already connected, don't connect again
    if (connected) {
        console.log('mongodb is already connected...');
        return;
    }

    // Connect to Mongodb
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
        console.log('mongodb is connected...');
    } catch (error) {
        console.log('mongodb is not connected');
        console.log(error);
    }
};

export default connectDB;