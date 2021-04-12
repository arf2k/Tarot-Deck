import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.styles.scss";

const Header = () => {
return (
     <div className="header-container">
          <div className="options-container">
          <Link className="page-option" to="/">
               HOME
               </Link>
               <Link className="page-option" to="/allcards">
               ALL CARDS
               </Link>
               <Link className="page-option" to="/readings">
               READINGS
               </Link>

               </div>

          </div>
  
)
}

export default Header