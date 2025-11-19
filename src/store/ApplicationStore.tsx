import { createContext, useContext, useEffect, useState, useTransition, type ReactNode } from "react";

import { RestServices } from "../api/services";
import type { Product } from "../models/Product";

interface ApplicationStoreProps {
  listOfProducts: Product[];
  isPending: boolean;
}

const initialState: ApplicationStoreProps = {
  listOfProducts: [],
  isPending: true,
};

const ApplicationStore = createContext<ApplicationStoreProps>(initialState);

export const useApplicationStore = () => useContext(ApplicationStore);

const ApplicationStoreProvider = ({ children }: { children: ReactNode }) => {
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      RestServices.productController
        .getAllProducts()
        .then((products) => {
          setListOfProducts(products);
        })
        .catch((err) => alert(err));
    });
  }, []);

  return <ApplicationStore.Provider value={{ listOfProducts, isPending }}>{children}</ApplicationStore.Provider>;
};

export default ApplicationStoreProvider;
