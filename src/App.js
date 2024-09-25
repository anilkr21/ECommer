import { useEffect } from "react";
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import Checkout from "./checkout/Checkout";
import Confirmation from "./checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/itemDetails";
import CartMenu from "./scenes/global/CartMenu";

const ScrollToTop = () =>{
  const {pathName} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  return null;
}


function App() {
  return (
    <div className="app">
      <BrowserRouter >
      <Navbar />
        <ScrollToTop />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
