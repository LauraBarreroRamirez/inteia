import getProductsSaved from "./getProductsSaved";

const saveProductsToStorage = (product) => {
  let id = 1;
  const savedProducts = getProductsSaved();
  const products = [];
  if (savedProducts) {
    id = savedProducts[savedProducts.length - 1].id + 1;
    products.push(...savedProducts, { ...product, id });
  } else {
    products.push({ ...product, id });
  }

  localStorage.setItem("productsByUser", JSON.stringify(products));
};
export default saveProductsToStorage;
