import {
  useCartStorageService,
  useUserStorageService,
} from "../services/storageAdapter";

export const useLogout = () => {
  const { updateUser } = useUserStorageService();
  const { cleanCart } = useCartStorageService();

  const logout = () => {
    updateUser(null);
    cleanCart();
  };

  return { logout };
};
