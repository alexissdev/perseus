import config from "../config/config";
import mongoose from "mongoose";

export default async () => {
  try {
    const database = await mongoose.connect(config.databaseURL);
    console.log(`Database is connected to ${database.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
