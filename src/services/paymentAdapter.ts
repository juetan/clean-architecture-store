import { PaymentService } from "../application/ports";
import { api_payment } from "./api";

export const usePaymentService = (): PaymentService => {
  return {
    tryPay: api_payment,
  };
};
