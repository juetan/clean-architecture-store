import { FormEvent, useState } from "react";
import { useOrderProducts } from "../application/orderProducts";
import {
  useCartStorageService,
  useUserStorageService,
} from "../services/storageAdapter";

export const BuyButton = () => {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorageService();
  const { cart } = useCartStorageService();

  const [username, setUsername] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await orderProducts(user!, cart);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>用户名称</span>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label>
        <span>邮箱地址</span>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <div>
        <button onClick={onSubmit} type="submit">
          立即购买
        </button>
      </div>
    </form>
  );
};
