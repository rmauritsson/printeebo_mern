import { VscSearch } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <div>
          <a href="#">Help</a>
        </div>
        <div>
          <a href="#">Track Order</a>
        </div>
        <div>
          <a href="#">Sell Your Art</a>
        </div>
        <div>
          <a href="#">Signup</a>
        </div>
        <div>
          <a href="#">Login</a>
        </div>
      </div>

      <div className="header_main">
        <div className="header_main__logo">
          <img src="/images/logos-02.svg" alt="logo" />
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
          <HiOutlineHeart />
        </div>

        <div className="header_main__user">
          <HiOutlineShoppingCart />
        </div>
      </div>

      <div className="header_bottom">
        <div>
          <a href="#">Clothing</a>
        </div>
        <div>
          <a href="#">Men</a>
        </div>
        <div>
          <a href="#">Women</a>
        </div>
        <div>
          <a href="#">Children</a>
        </div>
        <div>
          <a href="#">Home & Living</a>
        </div>
        <div>
          <a href="#">Accessories</a>
        </div>
        <div>
          <a href="#">Gifts</a>
        </div>
        <div>
          <a href="#">New Arrivals</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
