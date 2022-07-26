import { Cart } from "./cart";
import { getTotalPrice } from "./product";
import { User } from "./user";

export type Order = {
  id: number;
  user: User;
  cart: Cart;
  totalPrice: number;
  createAt: string;
};

const orderList: Order[] = [];

export const createOrder = (user: User, cart: Cart): Order => {
  return {
    id: orderList.length + 1,
    user,
    cart,
    totalPrice: getTotalPrice(cart.products),
    createAt: Date().toString(),
  };
};
