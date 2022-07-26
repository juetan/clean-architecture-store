import {
  CartStorageService,
  OrderStorageService,
  UserStorageService,
} from "../application/ports";
import { useStore } from "./store";

export const useCartStorageService = (): CartStorageService => {
  return useStore();
};

export const useOrderStorageService = (): OrderStorageService => {
  return useStore();
};

export const useUserStorageService = (): UserStorageService => {
  return useStore();
};
