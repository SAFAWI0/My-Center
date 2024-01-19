import  {create}  from "zustand";

export const useAppStore = create((set) => ({
  isOpen: false,
  isOpenD: false,
  isLogin: false,
  setOpen: (isOpen) => set( {isOpen} ),
  setOpenD: (isOpenD) => set( {isOpenD} ),
  setIsLogin: (isLogin) => set({ isLogin }),
}));