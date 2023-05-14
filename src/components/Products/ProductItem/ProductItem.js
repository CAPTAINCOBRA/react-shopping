import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/actions/product";

const ProductItem = (props) => {
  const dispatchCartAction = useDispatch();

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    console.log("addToCartHandler");
    const product = {
      id: props.id,
      name: props.name,
      // amount: 1,
      amount: amount,
      price: props.price,
    };
    dispatchCartAction(addProduct(product));
  };

  const getImage = () => {
    const randomQuery = Math.floor(Math.random() * 1000);
    const url = `https://picsum.photos/id/${randomQuery}/200/300`;
    return url;
  };

  return (
    <li className={classes.Product}>
      <img
        className={classes.image}
        src={getImage()}
        alt={props.name}
        onError={(e) => {
          e.target.src = "https://picsum.photos/id/237/200/300";
        }}
      />
      <div className={classes.content}>
        <div>
          <h3>{props.name}</h3>
          {/* <div className={classes.description}>{props.description}</div> */}
          <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.formCont}>
          <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
