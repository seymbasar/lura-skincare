import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { ToastProvider } from "./components/ToastContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-[#F9F8F6]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
