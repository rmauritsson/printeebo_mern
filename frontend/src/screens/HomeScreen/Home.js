import products from "../../products";
import Product from "../../components/Product";

const Home = () => {
  return (
    <div className="products">
      <h3>Trending Products</h3>
      <div className="products_row">
        {products.map((product) => (
          <div className="products_column">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
