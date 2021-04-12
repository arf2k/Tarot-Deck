import React from "react";

const SearchBar = ({searchTerm, searchHandler}) => {

     return(
          <input
          placeholder="Search Cards"
          value={searchTerm}
          onChange={searchHandler}
          />
     )


}

export default SearchBar