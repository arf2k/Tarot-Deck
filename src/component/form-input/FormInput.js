import React from "react";
import "../../styles/FormInput.styles.scss";

const FormInput = ({ changeHandler, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={changeHandler} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
