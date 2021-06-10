const Header = () => {
  return (
    <header className="header">
      <div className="header_topmenu">
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
        <div className="header_main_search">Search</div>
        <div className="header_main__explore">Explore Drowndown</div>
        <div className="header_main__user">
          <p>User</p>
          <p>Wishlist</p>
          <p>Cart</p>
        </div>
      </div>

      <div className="header_bottom">
        <ul>
          <li>Clothing</li>
          <li>Men</li>
          <li>Women</li>
          <li>Children</li>
          <li>Home $ Living</li>
          <li>Accessories</li>
          <li>Gifts</li>
          <li>New Arrivals</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
