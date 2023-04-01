import { Router } from "express";
import userRoutes from "./routes/user.routes";

export default (): Router => {
  const app = Router();
  userRoutes(app);

  return app;
};
