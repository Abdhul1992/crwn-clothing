import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.scss";
import CollectionPreview from "../previewCollection/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
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

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
