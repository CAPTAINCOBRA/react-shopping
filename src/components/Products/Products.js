import { Fragment, useRef, useState } from "react";

import ProductsSummary from "./ProductsSummary";
import AvailableProducts from "./AvailableProducts";
import Input from "../UI/Input";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const setSearchTermHandler = (searchTerm) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
  };

  return (
    <Fragment>
      <ProductsSummary />

      <h1 style={{ textAlign: "center" }}>Search for products by name</h1>
      <Input
        input={{ id: "search", type: "text" }}
        label="Search"
        placeHolder="Search"
        onChange={(event) => setSearchTermHandler(event.target.value)}
      />

      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
