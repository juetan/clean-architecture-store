import { addProduct, Cart } from "../domain/cart";
import { Product } from "../domain/product";
import { useCartStorageService } from "../services/storageAdapter";
import { CartStorageService } from "./ports";

export const useAddToCart = () => {
  const cartStorage: CartStorageService = useCartStorageService();

  const addToCart = (product: Product) => {
    const { cart } = cartStorage;
    const toUpdate = addProduct(cart, product);
    cartStorage.updateCart(toUpdate);
  };

  return { addToCart };
};

export const useRemoveFromCart = () => {
  const { cart, updateCart }: CartStorageService = useCartStorageService();

  const removeFromCart = (product: Product) => {
    const index = cart.products.indexOf(product);
    cart.products.splice(index, 1);
    updateCart({ ...cart, products: [...cart.products] });
  };

  return { removeFromCart };
};
