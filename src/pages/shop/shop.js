import React, { Component } from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/previewCollection/CollectionPreview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProp }) => {
          return (
            <CollectionPreview
              key={id}
              {...otherCollectionProp}
            ></CollectionPreview>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
