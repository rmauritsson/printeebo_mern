import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = (e) => {
    dispatch(logout());
  };

  return (
    <header className="h-18">
      <div className="bg-gray-200 flex py-2 px-12">
        <div className='container mx-auto text-sm flex justify-end font-inter font-semibold'>
          {userInfo ? <p>Hi, {userInfo.name} </p> : ""}
          <div className="mx-2">
            <Link to="/help">Help</Link>
          </div>
          <div className="mx-2">
            <Link to="#">Track Order</Link>
          </div>
          <div className="mx-2">
            <Link to="/store">Sell Your Art</Link>
          </div>
          {userInfo ? (
            <>
              <div className="mx-2" onClick={logoutHandler}>
                Logout
              </div>
            </>
          ) : (
            <>
              <div className="mx-2">
                <Link to="/register">Signup</Link>
              </div>
              <div className="mx-2">
                <Link to="/login">Login</Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className='flex justify-between items-center'>
          <Link to="/">
            <img className="h-12" src="/images/logos-02.svg" alt="logo" />
          </Link>
        </div>
        <div className='mx-12 w-1/2'>
          <form class="relative mx-auto text-gray-600">
            <input
              class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-full"
              type="search" name="search" placeholder="Search for t-shirts and other products" />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
              <svg class="text-gray-600 h-4 w-4 fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.92 3.59995C10.3412 3.59995 7.43998 6.50115 7.43998 10.08C7.43998 11.8934 8.18331 13.531 9.38497 14.7086C10.5549 15.8551 12.1539 16.56 13.92 16.56C17.4988 16.56 20.4 13.6588 20.4 10.08C20.4 6.50115 17.4988 3.59995 13.92 3.59995ZM5.03998 10.08C5.03998 5.17566 9.01569 1.19995 13.92 1.19995C18.8243 1.19995 22.8 5.17566 22.8 10.08C22.8 14.9842 18.8243 18.96 13.92 18.96C11.9258 18.96 10.0839 18.3016 8.60178 17.1918L3.24075 22.4562L1.5592 20.7437L6.89145 15.5077C5.73143 14.0073 5.03998 12.1236 5.03998 10.08Z" fill="gray" />
              </svg>
            </button>
          </form>
        </div>


        <div className='flex'>
          <div className='mx-4'>
            <form action="">
              <select name="explore" id="explore">
                <option value="volvo">Explore</option>
              </select>
            </form>
          </div>

          <div className='mx-4'>
            <FaUserAlt />
          </div>

          <div className='mx-4'>
            <Link to="/wishlist">
              <HiOutlineHeart />
            </Link>
          </div>

          <div className='mx-4'>
            <Link to="/cart">
              <HiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>


      <div className="font-inter uppercase font-semibold bg-white border-gray-200 border-t-2 border-b-8 flex py-4 px-12 justify-between max-w-full">
        <div className='container mx-auto text-sm flex justify-between'>
          <div>
            <Link to="#">Clothing</Link>
          </div>
          <div>
            <Link to="#">Men</Link>
          </div>
          <div>
            <Link to="#">Women</Link>
          </div>
          <div>
            <Link to="#">Children</Link>
          </div>
          <div>
            <Link to="#">Home & Living</Link>
          </div>
          <div>
            <Link to="#">Accessories</Link>
          </div>
          <div>
            <Link to="#">Gifts</Link>
          </div>
          <div>
            <Link to="#">New Arrivals</Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
