const Category = ({ product }) => {
  return (
    <div className="category_card">
      <div className="category_card__img">
        <a href={`/product/${product._id}`}>
          <img src={product.storeImage} alt="" />
        </a>
      </div>

      <div className="category_card__body">
        <a href={`/product/${product._id}`}>
          <strong>SHOP {product.category}'S</strong>
        </a>
      </div>
    </div>
  );
};

export default Category;
