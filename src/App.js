import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/productlist/ProductList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Header.css";
import "./components/Button.css";
import "./components/productlist/Productlist.css";
import "./components/productlist/ProductItem.css";
import "./components/AddProductItem.css";
import "./components/productlist/DetailedProductList.css";
import DetailedProductList from "./components/productlist/DetailedProductList.js";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/products?_sort=id&_order=desc`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);
  //fetch feedback

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header
                  title="General Product List"
                  products={products}
                  setProducts={setProducts}
                />
                <ProductList products={products} setProducts={setProducts} />
              </>
            }
          ></Route>
          <Route
            path="/details/:id"
            exact
            element={
              <DetailedProductList
                products={products}
                setProducts={setProducts}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
