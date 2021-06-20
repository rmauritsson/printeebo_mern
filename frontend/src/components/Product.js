import products from "../products";

const Product = ({ product }) => {
  return (
    <div className="product_card">
      <div className="product_card__img">
        <a href={`/product/${product._id}`}>
          <img src={product.image} alt="" />
        </a>
      </div>

      <div className="product_card__body">
        <a href={`/product/${product._id}`}>
          <strong>{product.name}</strong>
        </a>
        <p>
          By <span>{product.store}</span>
        </p>
      </div>

      <div className="product_card__footer">
        <p>{/** Product Rating */}</p>
        <h4>UGX 25,000</h4>
      </div>
    </div>
  );
};

export default Product;
