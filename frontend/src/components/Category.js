import { Link } from "react-router-dom";

const Category = ({ product }) => {
  return (
    <div className="category_card">
      <div className="category_card__img">
        <Link to={`/product/${product._id}`}>
          <img src={product.storeImage} alt="" />
        </Link>
      </div>

      <div className="category_card__body">
        <Link to={`/product/${product._id}`}>
          <strong>SHOP {product.category}'S</strong>
        </Link>
      </div>
    </div>
  );
};

export default Category;
