import  {create}  from "zustand";

export const useAppStore = create((set) => ({
  isOpen: false,
  setOpen: (isOpen) => set( {isOpen} ),
}));