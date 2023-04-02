import { Router } from "express";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";

export default (): Router => {
  const app = Router();
  userRoutes(app);
  productRoutes(app);
  
  return app;
};
