import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import "./cart-icon.scss";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
