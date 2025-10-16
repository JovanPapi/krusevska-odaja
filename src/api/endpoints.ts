type EndpointProps = string;

export const endpoints = {
  productController: {
    getAllProducts: (): EndpointProps => "/api/public/fetch-products",
  },
};
