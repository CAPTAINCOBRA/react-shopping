import React, { Fragment } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { input, label, parentName, placeHolder, onChange } = props;

  return (
    <Fragment>
      {parentName === "ProductItemForm" ? (
        <div className={classes.input}>
          <label htmlFor={input.id}>{label}</label>
          <input ref={ref} {...input} />
        </div>
      ) : (
        <div className={classes.searchInput}>
          <input
            placeholder={placeHolder}
            ref={ref}
            {...input}
            className=""
            onChange={onChange}
          />
        </div>
      )}
    </Fragment>
  );
});

export default Input;
