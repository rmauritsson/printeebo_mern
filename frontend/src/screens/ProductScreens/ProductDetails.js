import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";

const Product = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdult, setIsAdult] = useState(true);
  const [size, setSize] = useState("");
  const [chart, setChart] = useState("Adult");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState("");

  const colorOptions = [
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Yellow",
      value: "yellow",
    },
  ];

  const sizeOptions = [
    {
      label: "Adult",
      chart: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      label: "Children",
      chart: ["S", "M", "L"],
    },
  ];

  const orderRequirements = {
    quantity: quantity,
    chart: chart,
    size: size,
    color: color,
    style: style,
  };

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
    //dispatch(listStoreDetails(product.store));

    // console.log("Product Store", product);
    //console.log("Loading state", loading);
  }, []);

  useEffect(() => {
    console.log("Order Requirements", orderRequirements);
    //console.log("selected size", size);
  }, [chart, color]);

  const handleQtyChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChartChange = (event) => {
    setChart(event.target.value);
  };

  const handleSizeChange = (event) => {
    console.log("You have selected", event.target.value);
    setSize(event.target.value);
  };

  const handleStyleChange = (event) => {};

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="product_details">
          <div className="product_details__options">
            <div className="back">
              <div>
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83 11L8.41 8.41L7 7L2 12L7 17L8.41 15.59L5.83 13H22V11H5.83Z"
                      fill="#2E3A59"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="options">
              <div className="options__img">
                <img src={product.image} alt="product" />
              </div>
              <div className="options__img">
                <img src={product.image} alt="product" />
              </div>
              <div className="options__img">
                <img src={product.image} alt="product" />
              </div>
            </div>
          </div>

          <div className="product_details__img">
            <img src={product.image} alt="product" />
          </div>
          <div className="product_details__description">
            <div className="description_header">
              <h1>{product.name}</h1>
              {/**
   * 
              {productDetails ? (
                loading ? (
                  "true"
                ) : (
                  <p>By {product.store.name}</p>
                )
              ) : (
                "not loaded"
              )}

   */}
              <h1>UGX {product.price}</h1>
            </div>
            <div className="description_style">
              <h3>Style</h3>
              <div className="style_options">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="description_color">
              <h3>Color</h3>
              <div className="colorOptions">
                {colorOptions.map((color) => (
                  <div key={color.value} onChange={handleColorChange}>
                    <input
                      type="radio"
                      id={color.value}
                      value={color.value}
                      name="color"
                    />
                    <label className={color.value} htmlFor={color.value}>
                      {color.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="description_sizechart">
              <div className="sizechart__header">
                <h3>Size</h3>
                <div>
                  <select
                    name="size"
                    id="size"
                    onChange={handleSizeChartChange}
                  >
                    {sizeOptions.map((option) => (
                      <option key={option.label} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sizechart__body">
                {chart === "Adult"
                  ? sizeOptions[0].chart.map((chart) => (
                      <div key={chart} onChange={handleSizeChange}>
                        <input
                          type="radio"
                          id={chart}
                          value={chart}
                          name="size"
                        />
                        <label htmlFor={chart}> {chart}</label>
                      </div>
                    ))
                  : sizeOptions[1].chart.map((chart) => (
                      <div key={chart} onChange={handleSizeChange}>
                        <input
                          type="radio"
                          id={chart}
                          value={chart}
                          name="size"
                        />
                        <label htmlFor={chart}> {chart}</label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="description_cartinfo">
              <select
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={handleQtyChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button>
                Add to cart
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 18.5L24 12L17.5 5.5L16.793 6.207L22.086 11.5L0 11.5V12.5L22.086 12.5L16.793 17.793L17.5 18.5Z"
                    fill="#2E3A59"
                  />
                </svg>
              </button>
            </div>
            <div className="description_meta">
              <div className="meta_header">
                <h4>Expected Delivery</h4>
                <p>11-15 November</p>
                <p>
                  All items are printed on order. This takes 2-6 working days. .
                </p>
                <p>Check your estimated delivery date at checkout</p>
                <p>
                  The item can be delivered to your place of convenience or
                  picked from one of our pickup points.
                </p>
              </div>

              <div className="meta_description">
                <h4>
                  Product Description
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
                </h4>
                <ul>
                  <li>{product.description}</li>
                </ul>
              </div>
              <div className="meta_footer">
                <h4>
                  Free Delivery and Returns{" "}
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
                </h4>
                <p>Free delivery on orders above UGX 150,000/-.</p>
                <p>
                  If you’re not satisfied with your physical order, let us know.
                  We are happy to make things right. Learn more about our Return
                  Policy here.
                </p>
              </div>
            </div>

            <div className="description_share"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
