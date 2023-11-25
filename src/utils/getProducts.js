import axios from "axios";
import { url } from "./urlConstans";
import getProductsSaved from "./getProductsSaved";

export const getProducts = async () => {
  const response = await axios.get(url);
  const productsSavedByUser = getProductsSaved();
  if (productsSavedByUser) {
    return [...response.data, ...productsSavedByUser];
  }
  return response.data;
};
