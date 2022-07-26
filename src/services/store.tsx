import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Cart } from "../domain/cart";
import { Order } from "../domain/order";
import { User } from "../domain/user";

const StoreContext = createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    user,
    cart,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    cleanCart: (cart: any) => setCart({ ...cart, products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
