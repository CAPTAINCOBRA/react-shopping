import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";
import { useSelector } from "react-redux";

const AvailableProducts = () => {
  const stateData = useSelector((state) => state);
  const { allProducts, displayProducts } = stateData;
  console.log("allProducts", allProducts);

  const productsList = allProducts.map((Product) => (
    <ProductItem
      key={Product.id}
      id={Product.id}
      name={Product.name}
      description={Product.description}
      price={Product.price}
      image={Product.image}
    />
  ));

  const displayList = () => {
    if (displayProducts.length !== 0) {
      return displayProducts.map((Product) => (
        <ProductItem
          key={Product.id}
          id={Product.id}
          name={Product.name}
          description={Product.description}
          price={Product.price}
          image={Product.image}
        />
      ));
    } else {
      return productsList;
    }
  };

  return (
    <section className={classes.products}>
      <Card>
        {/* <ul>{productsList}</ul> */}
        <ul>{displayList()}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
