import "./CollectionItem.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItemsToCart } from "../../redux/cart/cart.actions";
const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemsToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
