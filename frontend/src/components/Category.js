import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="category_card">
      <div className="category_card__img">
        <Link to={`/category/${category._id}`}>
          <img src={category.image} alt="" />
        </Link>
      </div>

      <div className="category_card__body">
        <Link to={`/category/${category._id}`}>
          <strong>SHOP {category.name}'S</strong>
        </Link>
      </div>
    </div>
  );
};

export default Category;
