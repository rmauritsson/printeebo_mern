import { VscSearch } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <ul>
          <li>HELP</li>
          <li>TRACK ORDER</li>
          <li>SELL YOUR ART</li>
          <li>SIGN UP</li>
          <li>LOGIN</li>
        </ul>
      </div>

      <div className="header_main">
        <div className="header_main__logo">Printeebo</div>
        <div className="header_main_search">
          <form action="">
            <input
              type="text"
              placeholder="Search for t-shirts and other products"
              name="search"
            />
            <button>
              <VscSearch />
            </button>
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
          <div className="header_main__user__userIcon">
            <FaUserAlt />
          </div>
          <div className="header_main__user__wishlist">
            <HiOutlineHeart />
          </div>
          <div className="header_main__user__cart">
            <HiOutlineShoppingCart />
          </div>
        </div>
      </div>

      <div className="header_bottom">
        <ul>
          <li>Clothing</li>
          <li>Men</li>
          <li>Women</li>
          <li>Children</li>
          <li>Home & Living</li>
          <li>Accessories</li>
          <li>Gifts</li>
          <li>New Arrivals</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
