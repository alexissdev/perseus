import { config } from "dotenv";

export default (): void => {
  config();

  if (!process.env.PORT || !process.env.MONGO_URL) {
    console.log("Environment variables not found");
    process.exit(1);
  }

  console.log("Environment variables loaded successfully");
};
