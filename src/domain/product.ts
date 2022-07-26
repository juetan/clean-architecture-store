import { Ingredient } from "./ingredient";

export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  ingredient: Ingredient[];
};

export const getTotalPrice = (products: Product[]) => {
  return products.reduce((total, { price }) => total + price, 0);
};
