import React from "react";
import "../../styles/CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, isShuffle, ...otherProps }) => {
  return (
    <button
     
      className={`${isShuffle ? "shuffle" : ""} || ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
