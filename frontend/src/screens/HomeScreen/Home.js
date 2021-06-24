import products from "../../products";
import Product from "../../components/Product";
import Slider from "../../components/Slider";
import Category from "../../components/Category";
import Brand from "../../components/Brand";
import SellYourArtBanner from "./partials/SellYourArtBanner";
import CreateBanner from "./partials/CreateBanner";
import CustomCreate from "./partials/CustomCreate";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="home_wrapper">
        <div className="categories">
          <h3>Product Range</h3>
          <div className="category_row">
            {products.map((product) => (
              <div className="category_column">
                <Category product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="stores">
          <div className="stores_header">
            <h3>Featured Stores</h3>
            <a href="#">
              View All{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.46501 20.485L16.95 12L8.46501 3.515L7.05001 4.929L14.122 12L7.05001 19.071L8.46501 20.485Z"
                  fill="#2E3A59"
                />
              </svg>
            </a>
          </div>

          <div className="store_row">
            {products.map((product) => (
              <div className="store_column">
                <Brand product={product} />
              </div>
            ))}
          </div>
        </div>

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

        <div className="sale">
          <SellYourArtBanner />
        </div>

        <div className="create_banner">
          <CreateBanner />
        </div>

        <div className="home_store">
          <CustomCreate />
        </div>
      </div>
    </>
  );
};

export default Home;