import { getProducts } from "./getProducts";

export const getProduct = async (id) => {
  const products = await getProducts();
  return products.find((product) => product.id === Number(id));
};
