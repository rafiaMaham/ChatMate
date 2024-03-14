import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongo db database");
  } catch (error) {}
};

export default connectMongo;
