import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import productsImage from "../../assets/products.jpg";
import classes from "./Header.module.css";

const arr = ["Nozama", "Flip the Kart"];

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{arr[Math.floor(Math.random() * arr.length)]}</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={productsImage} alt="Any product anywhere!" />
      </div>
    </Fragment>
  );
};

export default Header;
