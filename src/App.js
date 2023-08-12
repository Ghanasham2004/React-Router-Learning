import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/order-summary" element={<OrderSummary/>} />
      <Route path="/products" element={<Products/>} >
        {/* add index route for when user render products route then we show feature content first */}
        <Route index element={<FeaturedProducts/>} />
        <Route path="feature" element={<FeaturedProducts/>} />
        <Route path="new" element={<NewProducts/>} />
      </Route>
      <Route path="*" element={<NoMatch/>} />
    </Routes>
    </>
  );
}

export default App;
