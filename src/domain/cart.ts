import { Product } from "./product";

export type Cart = {
  id: number;
  products: Product[];
};

// [2] 添加后返回购物车
export const addProduct = (cart: Cart, product: Product): Cart => {
  return { ...cart, products: [...cart.products, product] };
};

// 对比ID，解构赋值
export const contains = (cart: Cart, product: Product): boolean => {
  return cart.products.some(({ id }) => id === product.id);
};
