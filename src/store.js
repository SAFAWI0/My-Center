import { create } from "zustand";

export const useAppStore = create((set) => ({
  isOpen: false,
  isLogin: false,
  inf: {},
  setInf: (inf) => set({ inf }),
  setOpen: (isOpen) => set({ isOpen }),
  setIsLogin: (isLogin) => set({ isLogin }),
}));
