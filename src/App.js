import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CartContext } from "./Pages/creatCartContext";
import { Cart } from "./Pages/Cart";
import { FetchedAsync } from "./Pages/FetchedAsync";
import { BuyNow } from "./Pages/BuyNow";
import { ShoppingCart } from "./components/ShoppingCart";
import Form from "./Pages/Form";

const About = React.lazy(() => import("./components/About"));

export default function App() {
  return (
    <CartContext>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<p>Loading...</p>}>
            <Navbar />
            <Routes>
              <Route path="/" element={<FetchedAsync />} />
              <Route path="/product" element={<FetchedAsync />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/buy-now" element={<BuyNow />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/form" element={<Form />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </CartContext>
  );
}
