import { useState } from "react";
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
  const [products, setProducts] = useState([
    {
      id: 1,
      imageUrl:
        "https://ichef.bbci.co.uk/news/800/cpsprodpb/16F75/production/_108296049_gettyimages-1154574820.jpg",
      name: "Trees",
      count: 47,
      description: "Bananas are one of the healthiest fruits in the world",
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [],
    },
    {
      id: 2,
      imageUrl:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/avocado-halves.jpg?quality=82&strip=1&resize=640%2C360",
      name: "Avocados",
      count: 60,
      description:
        "Avocados grow on trees in warmer climates and are native to Mexico",
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [],
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Grapes",
      count: 45,
      description:
        "Grapes are a good source of fiber, potassium, and a range of vitamins and other minerals",
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [],
    },
  ]);

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
