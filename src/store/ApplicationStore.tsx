import { create } from "zustand";

import type { Product } from "../models/Product";
import initMenuStore from "../utils/staticMenu";

interface ApplicationStoreProps {
  listOfProducts: Product[];
}

const appStore = create<ApplicationStoreProps>()(() => ({
  listOfProducts: initMenuStore(),
}));

export default function useAppStore() {
  const store = appStore();
  return store;
}
