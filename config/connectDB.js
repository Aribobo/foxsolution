import mongoose from 'mongoose';
const connectDB = async () => mongoose.connect(process.env.MONGODB_URI);

export default connectDB;

 

