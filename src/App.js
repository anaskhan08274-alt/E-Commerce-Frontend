import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CartContext } from "./Pages/creatCartContext";
import { Cart } from "./Pages/Cart";
import { FetchedAsync } from "./Pages/FetchedAsync";
import { BuyNow } from "./Pages/BuyNow";
import { ShoppingCart } from "./components/ShoppingCart";
import Form  from "./Pages/Form"
const About = React.lazy(() => import ('./components/About'))

export default function App() {
 const [name, setName] = useState("");
const [savedName, setSavedName] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setSavedName(name);
};


  return (
    <CartContext>
    

      <div className="App">
        
        <BrowserRouter>
       <Suspense fallback={<p> loading...</p>}>
         <Routes>
  <Route path="/" element={<><Navbar /><FetchedAsync /></>} />
  <Route path="/product" element={<><Navbar /><FetchedAsync /></>} />
  <Route path="/cart" element={<><Navbar /><Cart /></>} />

  <Route path="/buy-now" element={<><BuyNow /></>} />
  <Route path="/shopping-cart" element={<><Navbar /><ShoppingCart /></>} />

  {/* Auth page */}
  <Route path="/form" element={<Form />} />

  <Route path="/about" element={<About />} />
</Routes>

          </Suspense>
        </BrowserRouter>
       
      </div>
    </CartContext>
  );
}
