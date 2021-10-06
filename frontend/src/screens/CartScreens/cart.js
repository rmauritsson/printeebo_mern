import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { HiOutlineShoppingCart } from "react-icons/hi";

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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //console.log('User Info on cart', userInfo)

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, chart, size, color, style));
    }
  }, []);

  const removeItemFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div className="container mx-auto px-6 py-3">
      <div className="w-9/12 mx-auto p-6 md:px-0 sm:px-0 flex mb-4">
        <div className="">
          <p>
            Log in to your <span>printeebo</span> account or create one to enjoy
            exclusive benefits
          </p>
          <div className="py-4">
            <button className="px-6 py-2 border-2 border-gray-500 font-epilogue rounded md:text-sm lg:w-2/6 md:w-8/12 md:mb-2 mr-4">
              CREATE ACCOUNT
            </button>
            <button className="px-6 py-2 border-2 border-gray-500 font-epilogue rounded md:text-sm lg:w-2/6 md:w-8/12 ">
              LOG IN
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center pl-8 mb-4">
            <HiOutlineShoppingCart />
            <p className="pl-4">Faster Checkout</p>
          </div>
          <div className="flex items-center pl-8 mb-4">
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
            <p className="pl-2">Easy returns and exchanges</p>
          </div>
          <div className="flex items-center pl-8 mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 4.99999C9.23995 5.0033 7.00331 7.23994 7 9.99999C7 11.166 7.527 13.185 10.035 16.186C10.6531 16.924 11.309 17.6297 12 18.3C12.691 17.6304 13.3472 16.9259 13.966 16.189C16.473 13.184 17 11.165 17 9.99999C16.9967 7.23994 14.7601 5.0033 12 4.99999ZM12 13C10.3431 13 9 11.6568 9 9.99999C9 8.34313 10.3431 6.99999 12 6.99999C13.6569 6.99999 15 8.34313 15 9.99999C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7957 13 12 13Z"
                fill="#2E3A59"
              />
            </svg>
            <p className="pl-2">Quick Order information and tracking</p>
          </div>
        </div>
      </div>
      <div className='py-2'>
        {cartItems.length === 0 ? (
          <h1 className='text-2xl font-semibold'>Your Cart is Empty</h1>
        ) : (
          <h1 className='text-2xl font-semibold'>
            Your Cart ({cartItems.length}){" "}
            {cartItems.length === 1 ? "Item" : "Items"}
          </h1>
        )}
      </div>
      <div className='flex'>
        <div className='w-3/4'>
          <div className="flex justify-center">
            <div className="flex flex-col w-full p-4 text-gray-800 bg-white shadow-lg pin-r pin-y mr-8">
              <div className="flex-1 font-inter">
                <table className="w-full text-sm lg:text-base font-inter" cellspacing="0">
                  <thead>
                    <tr className="h-12 uppercase">
                      <th className="hidden md:table-cell"></th>
                      <th className="text-left">Product</th>
                      <th className="lg:text-right text-left pl-5 lg:pl-0">
                        <span className="lg:hidden" title="Quantity">Qtd</span>
                        <span className="hidden lg:inline">Quantity</span>
                      </th>
                      <th className="hidden text-right md:table-cell">Unit price</th>
                      <th className="text-right">Total price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr>
                        <td className="hidden pb-4 md:table-cell">

                          <Link to={`/product/${item.product}`}>
                            <img src={item.image} className="w-20 rounded" alt="Thumbnail" />
                          </Link>
                        </td>
                        <td>


                          <Link to={`/product/${item.product}`}>
                            <p className='mb-2 font-semibold'>{item.name}</p>
                          </Link>
                          <p className='text-sm'><span className='font-semibold'>Style - </span>{item.style}</p>
                          <p className='text-sm'>
                            <span className='font-semibold'>Size</span> - {item.chart}, {item.size}{" "}
                          </p>
                          <p className='text-sm'> <span className='font-semibold'>Color</span> - {item.color}</p>

                          <div className='flex'>
                            <button className='mr-4' onClick={e => removeItemFromCartHandler(item.product)}>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='h-4'
                              >
                                <path
                                  d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z"
                                  fill="#2E3A59"
                                />
                              </svg>
                            </button>
                            <button type="submit" class="text-gray-700 hover:text-blue">
                              <small>Edit</small>
                            </button>
                          </div>

                        </td>
                        <td className="justify-center md:justify-end md:items-center md:flex mt-6">
                          <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                              <select
                                name="quantity"
                                id="quantity"
                                value={item.qty}
                                className="w-full font-normal text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
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
                          </div>
                        </td>
                        <td className="hidden text-right md:table-cell">
                          <span className="text-sm lg:text-inter font-normal">
                            UGX {item.price}
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-sm lg:text-inter font-normal">
                            UGX {(item.price * item.qty).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}


                  </tbody>
                </table>
                <hr className="" />
                <div className="my-4 -mx-2 lg:flex">
                  <div className="lg:px-2 lg:w-1/2">
                  </div>
                  <div className="lg:px-2 lg:w-1/2">
                    <div className="p-4">
                      <div className="flex justify-between border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          Subtotal
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          UGX {cartItems.reduce(
                            (acc, item) => acc + item.qty * item.price,
                            0
                          ).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <p className="mb-6 text-xs text-center">Actual delivery cost will be calculated on checkout.</p>

                      <a href="#">
                        <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-white text-blue border border-blue rounded-full item-center  focus:shadow-outline focus:outline-none">
                          <span className="ml-2 mt-5px">Continue Shopping</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>Cart Total</div>
        </div>
        <div className='w-1/4'>

          <div className="w-full mb-12 xl:mb-0 ">
            <h1 className='font-semibold text-2xl border-t-0 px-6 md:px-0 sm:px-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700'>Order Summary</h1>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse text-inter">
                  <tbody>
                    <tr>
                      <th className="border-t-0 md:px-0 sm:px-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        UGX {" "}
                        {cartItems.reduce(
                          (acc, item) => acc + item.qty * item.price,
                          0
                        ).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 md:px-0 sm:px-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        Estimated Delivery
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        UGX 5000
                      </td>
                    </tr>

                    <tr>
                      <th className="px-6 md:px-0 sm:px-0 bg-blueGray-50 text-blueGray-500 align-middle border border-b-0 -solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Estimated Total
                      </th>
                      <th className="px-6 bg-blueGray-50 border-b-0 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        UGX {" "}
                        {cartItems.reduce(
                          (acc, item) => acc + item.qty * item.price,
                          0 + 5000
                        ).toFixed(2)}
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div className='px-6 md:px-0 sm:px-0 w-4/5'>
                  <button className='bg-blue text-white font-epilogue w-full py-2 rounded mt-4' disabled={cartItems.length === 0} onClick={e => checkOutHandler()}>CHECK OUT</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-8'>Recently Viewed Products</div>
      <div className='py-8'>Related Products</div>
    </div>
  );
};

export default Cart;
