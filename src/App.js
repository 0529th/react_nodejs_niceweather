import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";

function App() {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate("/product");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main goToProduct={goToProduct} />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
