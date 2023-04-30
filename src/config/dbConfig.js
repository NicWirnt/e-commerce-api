import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_CLIENT);

    console.log("mongoDb connected");
    return conn;
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
  }
};
