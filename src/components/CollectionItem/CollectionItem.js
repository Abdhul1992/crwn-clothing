import "./CollectionItem.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer"></div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  );
};

export default CollectionItem;
