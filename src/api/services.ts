import type { Product } from "../models/Product";

import axiosApi from "./axiosApi";
import { endpoints } from "./endpoints";

export const RestServices = {
  productController: {
    getAllProducts: () => axiosApi<Product[]>(endpoints.productController.getAllProducts(), "GET"),
  },
};
