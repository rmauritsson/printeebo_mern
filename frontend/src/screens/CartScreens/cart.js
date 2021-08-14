import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import queryString from "query-string";
import { addToCart, removeFromCart } from "../../actions/cartActions";

const Cart = ({ match, location, history }) => {
  let params = queryString.parse(location.search);
  const qty = Number(params.qty);
  const chart = params.chart;
  const size = params.size;
  const color = params.color;
  const style = params.style;
  const productId = match.params.id;

  //console.log('params', typeof (qty))
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, chart, size, color, style));
    }
  }, [dispatch, productId, qty, chart, size, color, style]);

  const removeItemFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };

  const checkOutHandler = () => {
    history.push('/login?redirect=shipping')
  };


  return (
    <div className="cart">
      <div className="header"></div>
      <div className="description">
        {cartItems.length === 0 ? (
          <h1>Your Cart is Empty</h1>
        ) : (
          <h1>
            Your Cart ({cartItems.length}){" "}
            {cartItems.length === 1 ? "Item" : "Items"}
          </h1>
        )}
      </div>
      <div className="cart_content">
        <div className="description">
          {cartItems.length === 0 ? (
            ""
          ) : (
            <div className="cart_body">
              <table>
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>QTY</th>
                    <th>UNIT PRICE</th>
                    <th>SUB-TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr>
                      <td>
                        <div className="item_content">
                          <div className="product_Image">
                            <img src={item.image} alt="Item Pic" />
                          </div>
                          <div className="cart_description">
                            <Link to={`/product/${item.product}`}>
                              <h3>{item.name}</h3>
                            </Link>
                            <p>{item.style}</p>
                            <p>
                              Size - <span>{item.chart}</span>, {item.size}{" "}
                            </p>
                            <p>Color - {item.color}</p>
                            <div className="cart_actions">
                              <button onClick={e => removeItemFromCartHandler(item.product)}>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z"
                                    fill="#2E3A59"
                                  />
                                </svg>
                              </button>

                              <h6>EDIT</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="item_content__qty">
                          <select
                            name="quantity"
                            id="quantity"
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="item_content__qty">
                          <p>UGX {item.price}</p>
                        </div>
                      </td>
                      <td>
                        <div className="item_content__qty">
                          <p>UGX {(item.price * item.qty).toFixed(2)} </p>
                        </div>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td></td>
                    <td></td>
                    <td colSpan="2">
                      <div className="total">
                        <h4>
                          Subtotal <span>UGX {cartItems.reduce(
                            (acc, item) => acc + item.qty * item.price,
                            0
                          ).toFixed(2)}</span>
                        </h4>
                        <p>
                          Actual delivery cost will be calculated on checkout.
                        </p>
                        <button>Continue Shopping</button>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="summary">
          {cartItems.length === 0 ? '' : (<table>
            <thead>
              <tr>
                <th>Order Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="item_content">
                    <div className="product_total">
                      <p>
                        Subtotal(
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      </p>
                      <p>Estimated Delivery</p>
                    </div>
                    <div className="cart_description">
                      <p>
                        UGX -{" "}
                        {cartItems.reduce(
                          (acc, item) => acc + item.qty * item.price,
                          0
                        ).toFixed(2)}
                      </p>
                      <p>UGX - 5000</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="item_content">
                    <div className="item_delivery">
                      <h4>Estimated Delivery</h4>
                    </div>
                    <div className="checkout_total">
                      <h4>
                        UGX -{" "}
                        {cartItems.reduce(
                          (acc, item) => acc + item.qty * item.price,
                          0 + 5000
                        ).toFixed(2)}
                      </h4>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <button disabled={cartItems.length === 0} onClick={e => checkOutHandler()}>CHECK OUT</button>
                </td>
              </tr>
            </tbody>
          </table>)}

        </div>
      </div>
      <div className="cart_relatable">**to be added</div>
    </div>
  );
};

export default Cart;
