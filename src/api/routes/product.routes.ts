import { Router, Request, Response } from "express";
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

  router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProduct(id);
    if (!product) {
      return res.status(404).send("Product not found");
    }

    return res.status(200).json(product);
  });

  router.post("/create", async (req: Request, res: Response) => {
    const productTemplate: Product = createProductTemplate(req.body);
    const newProduct = await createProduct(productTemplate);
    if (!newProduct) {
      return res.status(404).send("Error creating product");
    }

    return res.status(200).json(newProduct);
  });

  router.put("/:id", async (req: Request, res: Response) => {
    const productTemplate: Product = createProductTemplate(req.body);
    const updatedProduct = await updateProduct(productTemplate);
    if (!updatedProduct) {
      return res.status(404).send("Error updating product");
    }

    return res.status(200).json(updatedProduct);
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    const deletedProduct = await deleteProduct(req.params.id);
    if (!deletedProduct) {
      return res.status(404).send("Error deleting product");
    }

    return res.status(200).json(deletedProduct);
  });

  return router;
};
