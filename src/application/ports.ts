import { Cart } from "../domain/cart";
import { Order } from "../domain/order";
import { User } from "../domain/user";

export interface PaymentService {
  tryPay(user: User, amount: number): Promise<boolean>;
}

export interface MessageService {
  notify(message: string): void;
}

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  cleanCart(): void;
}

export interface OrderStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

export interface UserStorageService {
  user: User;
  updateUser(user: Partial<User | null>): void;
}
