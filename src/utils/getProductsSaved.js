const getProductsSaved = () => {
  const productsSaved = localStorage.getItem("productsByUser");

  if (productsSaved) {
    const products = JSON.parse(productsSaved);
    return products;
  }
  return null;
};

export default getProductsSaved;
