import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/HomeScreen/Home";
import Product from "./screens/ProductScreens/ProductDetails";
import Store from "./screens/StoreScreens/BrandStore";
import Category from "./screens/CategoryScreens/CategoryDetails";
import Cart from "./screens/CartScreens/cart";
import Login from "./screens/UserActionScreens/Login";
import Register from "./screens/UserActionScreens/Register";
import Shipping from "./screens/ShippingScreens/Shipping";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/product/:id" component={Product} />
        <Route path="/store/:id" component={Store} />
        <Route path="/category/:id" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/cart/:id" component={Cart} />
        <Route path='/shipping' component={Shipping} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
