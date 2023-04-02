import Product, { ProductSchema } from "../models/product.model";

export const getProducts = async () => {
  const products: Product[] = await ProductSchema.find();
  return products;
};

export const getProduct = async (id: string) => {
  const product = await ProductSchema.findById(id);
  return product;
};

export const createProduct = async (productTemplate: Product) => {
  const product = new ProductSchema(productTemplate);
  await product.save();
  return product;
};

export const updateProduct = async (product: Product) => {
  const updatedProduct = await ProductSchema.findByIdAndUpdate(
    product.id,
    product,
    {
      new: true,
    }
  );

  return updatedProduct;
};

export const deleteProduct = async (id: string) => {
  const deletedProduct = await ProductSchema.findByIdAndDelete(id);
  return deletedProduct;
}
