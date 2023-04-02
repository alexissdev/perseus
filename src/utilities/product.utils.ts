import Product from "../models/product.model";
import { parseString, parseNumber } from "./utils";

export const createProductTemplate = (body: any): Product => {
  const { _id, name, price, description, image } = body;
  return {
    _id: parseString(_id),
    name: parseString(name),
    price: parseNumber(price),
    description: parseString(description),
    image: parseString(image),
  };
};
