import React from "react";
import "../../styles/CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, isShuffle, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""}custom-button`}
      className={`${isShuffle ? "shuffle" : ""} custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
