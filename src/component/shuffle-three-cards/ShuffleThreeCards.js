import React from "react";
import SingleCard from "../single-card/SingleCard";
// import { useSelector } from "react-redux";
import { connect } from "react-redux";

const ShuffleThreeCards = ({ threeCards }) => {
  const renderThree = () => {
    return threeCards.map((card) => <SingleCard card={card} />);
  };

  return <>{renderThree()}</>;
};

// const mapStateToProps = state => {
//   const {shuffle} = state
//   return {shuffle : [shuffle]}
// }

// const mapStateToProps = (state) => ({
// shuffle: state
// })

export default ShuffleThreeCards;
