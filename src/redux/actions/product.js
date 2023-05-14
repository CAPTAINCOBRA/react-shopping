import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action-types";

export const addProduct = (product) => {
  console.log("addProduct", product);
  return {
    type: ADD_PRODUCT,
    product: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id: id,
  };
};
