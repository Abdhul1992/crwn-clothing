import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IQvhxGl1HdVb5KFQ5xMlEyb1b8HycFT3wc3RWIRzqtcAsWBfdl3NRTGhKh8tABPzkRvv9YJbV8Yy2taYAJkNbtU00H01A3Caf";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://upload.wikimedia.org/wikipedia/commons/4/4d/Tudor_Crown_%28Heraldry%29.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
