import { Router, Request, Response } from "express";

import authMiddleware from "../middlewares/auth.middleware";

import Product from "../../models/product.model";
import { createProductTemplate } from "../../utilities/product.utils";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/product.service";

export default (app: Router): Router => {
  const router = Router();
  app.use("/products", router);

  router.get("/", async (_req: Request, res: Response) => {
    const products: Product[] = await getProducts();
    if (!products || products.length === 0) {
      return res.status(404).send("No products found");
    }

    return res.status(200).json(products);
  });

  router.post("/", authMiddleware, async (req: Request, res: Response) => {
    const productTemplate: Product = createProductTemplate(req.body);
    const newProduct = await createProduct(productTemplate);
    if (!newProduct) {
      return res.status(404).send("Error creating product");
    }

    return res.status(200).json(newProduct);
  });

  router.get("/:id", async (req: Request, res: Response) => {
    const product = await getProduct(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }

    return res.status(200).json(product);
  });

  router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
    const productTemplate: Product = createProductTemplate(req.body);
    const updatedProduct = await updateProduct(productTemplate);
    if (!updatedProduct) {
      return res.status(404).send("Error updating product");
    }

    return res.status(200).json(updatedProduct);
  });

  router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
    const deletedProduct = await deleteProduct(req.params.id);
    if (!deletedProduct) {
      return res.status(404).send("Error deleting product");
    }

    return res.status(200).json(deletedProduct);
  });

  return router;
};
