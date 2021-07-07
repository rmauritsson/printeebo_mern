import React, { useState, useEffect } from "react";
import ProductCard from "../ProductScreens/ProductCard";
import Slider from "../../components/Slider";
import Category from "../../components/Category";
import Brand from "../../components/Brand";
import SellYourArtBanner from "./partials/SellYourArtBanner";
import CreateBanner from "./partials/CreateBanner";
import CustomCreate from "./partials/CustomCreate";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //const response.data = await axios.get('/api/products')
      //destructure
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
            <Link to="#">
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
            </Link>
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
          <div className="products_header">
            <h3>Trending Products</h3>
            <Link to="#">
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
            </Link>
          </div>
          <div className="products_row">
            {products.map((product) => (
              <div className="products_column">
                <ProductCard product={product} />
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
