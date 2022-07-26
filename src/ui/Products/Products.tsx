import { useEffect, useState } from "react";
import { useAddToCart } from "../../application/addToCart";
import { contains } from "../../domain/cart";
import { Product } from "../../domain/product";
import { api_get_products } from "../../services/api";
import {
  useCartStorageService,
  useUserStorageService,
} from "../../services/storageAdapter";
import { useStore } from "../../services/store";

export const Products = () => {
  const [products, setProducts] = useState(api_get_products());
  const { user } = useUserStorageService();
  const { addToCart } = useAddToCart();
  const { cart } = useCartStorageService();

  const addProductToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <ul className="grid grid-cols-4 gap-x-6 gap-y-8">
      {products.map((product: Product) => {
        return (
          <li key={product.id} className="text-left">
            <img
              src={product.image}
              alt={product.name}
              width="320px"
              height="245px"
              className="w-96 rounded hover:opacity-75 bg-slate-50 cursor-pointer aspect-video"
            />
            <h2 className="text-base leading-[24px] text-slate-900 mt-2">
              {product.name}
            </h2>
            <p className="text-sm leading-[22px] text-slate-400">
              {product.description}
            </p>
            <div className="mt-0.5 flex justify-between items-center h-8">
              <span className="text-orange-500 leading-6 text-base rounded-md block">
                ￥{product.price.toFixed(2)}
              </span>
              <span>
                {!!user && !contains(cart, product) && (
                  <button
                    onClick={() => addProductToCart(product)}
                    className="h-8 text-sm leading-8 rounded-sm py-0 px-2 hover:outline-none active:outline-none bg-transparent text-blue-500 hover:text-blue-400 hover:border-blue-400 cursor-pointer"
                  >
                    +添加
                  </button>
                )}
                {contains(cart, product) && (
                  <span className="text-sm text-slate-400">已添加</span>
                )}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
