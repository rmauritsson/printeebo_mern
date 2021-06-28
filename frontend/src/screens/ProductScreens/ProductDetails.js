import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product_details">
      <div className="product_details__options">
        <div className="back">
          <div>
            <Link to="">
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
          <div className="options__img"></div>
          <div className="options__img"></div>
          <div className="options__img"></div>
        </div>
      </div>

      <div className="product_details__img">Product Image</div>
      <div className="product_details__description">
        <div className="description_header">
          <h1>Bakiga are gold T-shirt</h1>
          <p>
            By <span>Bakiga Nation</span>
          </p>
          <h1>UGX 25000</h1>
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
          <div className="color_options">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="description_sizechart">
          <div className="sizechart__header">
            <h3>Size</h3>
            <div>
              <select name="size" id="size">
                <option value="volvo">Adult</option>
              </select>
            </div>
          </div>
          <div className="sizechart__body">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="description_cartinfo">
          <select name="quantity" id="quantity">
            <option value="volvo">1</option>
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
              The item can be delivered to your place of convenience or picked
              from one of our pickup points.
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
              <li>All Tshirts are 100%</li>
              <li>Hoodies are made of 100% Cotton fleece</li>
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
              If you’re not satisfied with your physical order, let us know. We
              are happy to make things right. Learn more about our Return Policy
              here.
            </p>
          </div>
        </div>

        <div className="description_share"></div>
      </div>
    </div>
  );
};

export default Product;
