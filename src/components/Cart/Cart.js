import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../redux/actions/product.js";

const Cart = (props) => {
  const cartState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(cartState);

  const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;
  const hasItems = cartState.products.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(removeProduct(id));
  };

  const cartItemAddHandler = (item) => {
    console.log("cartItemAddHandler", item);
    dispatch(addProduct({ ...item, amount: 1 }));
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartState.products.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
