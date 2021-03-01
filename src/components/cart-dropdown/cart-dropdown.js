import React from "react";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";
import { selectCartItems } from "../../redux/cart/cart.selector";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps, null)(CartDropdown);
