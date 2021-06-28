import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/HomeScreen/Home";
import Product from "./screens/ProductScreens/ProductDetails";
import Store from "./screens/StoreScreens/BrandStore";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Product} />
        <Route path="/store/:id" component={Store} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
