import Product from "../models/product.model";
import { parseString, parseNumber } from "./utils";

export const createProductTemplate = (body: any): Product => {
  const { id, name, price, description, image } = body;
  return {
    id: parseString(id),
    name: parseString(name),
    price: parseNumber(price),
    description: parseString(description),
    image: parseString(image),
  };
};
