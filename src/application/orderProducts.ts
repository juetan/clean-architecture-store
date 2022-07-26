import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { User } from "../domain/user";
import { useMessageService } from "../services/messageAdapter";
import { usePaymentService } from "../services/paymentAdapter";
import {
  useCartStorageService,
  useOrderStorageService,
} from "../services/storageAdapter";
import {
  MessageService,
  PaymentService,
  CartStorageService,
  OrderStorageService,
} from "./ports";

export const useOrderProducts = () => {
  const payment: PaymentService = usePaymentService();
  const message: MessageService = useMessageService();
  const cartStorage: CartStorageService = useCartStorageService();
  const orderStorage: OrderStorageService = useOrderStorageService();

  const orderProducts = async (user: User, cart: Cart) => {
    const order = createOrder(user, cart);

    const paid = await payment.tryPay(user, order.totalPrice);
    if (!paid) return message.notify("(～￣▽￣)～，抱歉支付失败!");

    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.cleanCart();

    message.notify("🎉恭喜，支付成功!")
  };

  return { orderProducts };
};
