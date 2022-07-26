import { FormEvent, useMemo } from "react";
import { useNavigate } from "react-router";
import { useRemoveFromCart } from "../../application/addToCart";
import { useOrderProducts } from "../../application/orderProducts";
import {
  useCartStorageService,
  useUserStorageService,
} from "../../services/storageAdapter";

export const Cart = () => {
  const { cart } = useCartStorageService();
  const { cleanCart } = useCartStorageService();
  const { removeFromCart } = useRemoveFromCart();
  const { user } = useUserStorageService();
  const { orderProducts } = useOrderProducts();
  const navigate = useNavigate()

  const totalPrice = useMemo(() => {
    return cart.products.reduce((total, { price }) => total + price, 0);
  }, [cart]);

  const createOrder = async (e: FormEvent) => {
    e.preventDefault()
    await orderProducts(user, cart);
    navigate('/user')
  };

  return (
    <div className="">
      <div>
        <h2 className="text-base text-slate-500 mb-1">我的购物车</h2>
        <ul className="space-y-4 divide-y">
          {!!cart.products.length ? (
            cart.products.map((product) => (
              <li
                key={product.id}
                className="grid grid-cols-[1fr,auto,auto,auto] pt-4"
              >
                <div className="flex gap-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-12 rounded"
                  />
                  <div>
                    <h2 className="text-base text-slate-700">{product.name}</h2>
                    <p className="text-sm text-slate-400 mt-1">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="w-32 text-center space-y-1">
                  <p className="text-slate-700 text-base">
                    ￥{product.price.toFixed(2)}
                  </p>
                  <p className="text-slate-400">单价</p>
                </div>
                <div className="w-32 text-center space-y-1">
                  <p className="text-slate-700 text-base">{1}</p>
                  <p className="text-slate-400">数量</p>
                </div>
                <div className="w-24 text-center flex items-center justify-center">
                  <button
                    className="text-blue-500"
                    onClick={() => removeFromCart(product)}
                  >
                    移除商品
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className="leading-[180px] text-center text-sm text-slate-400">
              暂无商品
            </div>
          )}
        </ul>
        <div className="space-x-4 mt-4 mb-1 border-t border-slate-200 py-6 text-right">
          <span className="">
            总计：
            <span className="font-bold text-base text-orange-500">
              ￥{totalPrice.toFixed(2)}
            </span>
          </span>
          {!!cart.products.length && (
            <button onClick={cleanCart} className="text-blue-500">
              清空购物车
            </button>
          )}
          {!!cart.products.length && (
            <button className="text-blue-500 border border-blue-500 px-2 text-sm h-8 rounded-sm">
              立即结账
            </button>
          )}
        </div>
      </div>
      {/* <div className="mt-4">
        <h2 className="text-base text-slate-700 mt-4 mb-1">账单内容</h2>
        <form className="space-y-4" onSubmit={createOrder}>
          <label className="block mt-2">
            <div className="mb-1.5 text-slate-400">用户名称：</div>
            <input
              name="name"
              value={user.name}
              className="input lg:w-full border border-slate-300 hover:outline-none active:outline-none rounded-sm px-3"
              placeholder="请输入"
            ></input>
          </label>
          <label className="block mt-2">
            <div className="mb-1.5 text-slate-400">邮箱号码：</div>
            <input
              name="email"
              value={user.email}
              className="input lg:w-full border border-slate-300 hover:outline-none active:outline-none rounded-sm px-3"
              placeholder="请输入"
            ></input>
          </label>
          <label className="block mt-2">
            <div className="mb-1.5 text-slate-400">配送地址：</div>
            <textarea
              name="id"
              value={user.id}
              className="input resize-none h-32 lg:w-full py-1 border border-slate-300 hover:outline-none active:outline-none rounded-sm px-3"
              placeholder="请输入"
              rows={5}
            ></textarea>
          </label>
          <label className="block">
            <button
              type="submit"
              className="h-8 text-blue-500 border border-blue-500 px-3 rounded-sm"
            >
              立即支付
            </button>
          </label>
        </form>
      </div> */}
    </div>
  );
};
