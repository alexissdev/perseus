import { config } from "dotenv";

config();

export default {
  port: (process.env.PORT as unknown) as number || 3000,
  databaseURL: process.env.MONGO_URL || "mongodb://localhost:27017/test",
  jwtSecret: process.env.JWT_SECRET || "secret",
  api: {
    prefix: "/api"
  }
}