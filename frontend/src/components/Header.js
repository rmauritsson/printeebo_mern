import { FaUserAlt } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <div>
          <Link to="/help">Help</Link>
        </div>
        <div>
          <Link to="#">Track Order</Link>
        </div>
        <div>
          <Link to="/store">Sell Your Art</Link>
        </div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="header_main">
        <div className="header_main__logo">
          <Link to="/">
            <img src="/images/logos-02.svg" alt="logo" />
          </Link>
        </div>
        <div className="header_main_search">
          <form action="">
            <input
              type="text"
              placeholder="Search for t-shirts and other products"
              name="search"
            />
          </form>
        </div>
        <div className="header_main__explore">
          <form action="">
            <select name="explore" id="explore">
              <option value="volvo">Explore</option>
            </select>
          </form>
        </div>

        <div className="header_main__user">
          <FaUserAlt />
        </div>

        <div className="header_main__user">
          <Link to="/wishlist">
            <HiOutlineHeart />
          </Link>
        </div>

        <div className="header_main__user">
          <Link to="/cart">
            <HiOutlineShoppingCart />
          </Link>
        </div>
      </div>

      <div className="header_bottom">
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
    </header>
  );
};

export default Header;
