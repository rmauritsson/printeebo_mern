import { Link } from "react-router-dom";

const Category = ({ product }) => {
  return (
    <div className="category_card" key={product._id}>
      <div className="category_card__img">
        <Link to={`/product/${product._id}`}>
          <img src={product.storeImage} alt="" />
        </Link>
      </div>

      <div className="category_card__body">
        <Link to={`/product/${product._id}`}>
          <strong>SHOP {product.category}'S</strong>
          {console.log("Checking", product)}
        </Link>
      </div>
    </div>
  );
};

export default Category;
