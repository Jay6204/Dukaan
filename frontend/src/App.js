import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;