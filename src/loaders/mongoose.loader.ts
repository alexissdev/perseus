import mongoose from "mongoose";

export default async () => {
  const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/test";

  try {
    const database = await mongoose.connect(MONGO_URL);
    console.log(`Database is connected to ${database.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
