import { Router } from "express";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";
import authRoutes from "./routes/auth.routes";

export default (): Router => {
  const app = Router();
  userRoutes(app);
  productRoutes(app);
  authRoutes(app);
  
  return app;
};
