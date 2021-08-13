const Cart = () => {
  return (
    <div className="cart">
      <div className="header"></div>
      <div className="description">
        <h1>Your Cart (2) Items</h1>
      </div>
      <div className="cart_content">
        <div className="description">
          <div className="cart_body">
            <table>
              <tr>
                <th>ITEM</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
                <th>SUB-TOTAL</th>
              </tr>
              <tr>
                <td>
                  <div className="item_content">
                    <div className="product_Image">
                      <img src="#" alt="Item Pic" />
                    </div>
                    <div className="cart_description">
                      <h3>Bakiga Are gold T-shirt</h3>
                      <p>Short Sleeved round Neck</p>
                      <p>Size -M </p>
                      <p>Color - Red</p>
                      <p>
                        <a href="#">EDIT</a>
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="item_content__qty">
                    <select
                      name="quantity"
                      id="quantity"
                      //value={quantity}
                      // onChange={handleQtyChange}
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
                    <p>UGX 25,000</p>
                  </div>
                </td>
                <td>
                  <div className="item_content__qty">
                    <p>UGX 25,000</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td colSpan="2">
                  <div className="total">
                    <h4>
                      Subtotal <span>UGX 30,000</span>
                    </h4>
                    <p>Actual delivery cost will be calculated on checkout.</p>
                    <button>Continue Shopping</button>
                  </div>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className="cart_total"></div>
        </div>
        <div className="summary">
          <table>
            <tr>
              <th>Order Summary</th>
            </tr>
            <tr>
              <td>
                <div className="item_content">
                  <div className="product_total">
                    <p>Subtotal(2)</p>
                    <p>Estimated Delivery</p>
                  </div>
                  <div className="cart_description">
                    <p>UGX - 50,000</p>
                    <p>UGX - 5000</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="item_content">
                  <div className="product_Image">
                    <h4>Estimated Delivery</h4>
                  </div>
                  <div className="cart_description">
                    <h4>UGX - 55000</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <button>CHECK OUT</button>
            </tr>
          </table>
        </div>
      </div>
      <div className="cart_relatable">**to be added</div>
    </div>
  );
};

export default Cart;
