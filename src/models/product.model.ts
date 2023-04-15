import Model from "./model";
import { Schema, model } from "mongoose";

export default interface Product extends Model {
  name: string;
  price: number;
  description: string;
  image: string;
}

export const ProductSchema = model<Product>(
  "Product",
  new Schema<Product>({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  })
);
