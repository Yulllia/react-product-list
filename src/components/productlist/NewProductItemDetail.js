import { useState } from "react";
import { Link } from "react-router-dom";
// import DetailedProductList from "./components/productlist/DetailedProductList.js";
// import "./components/productlist/DetailedProductList.css";

function NewProductItemDetail({ product }) {
  return (
    <div className="product">
      <div>
        <ImageComponent url={product.imageUrl} />
      </div>
      <h3 className="description">{product.description}</h3>
      <h3 className="namecount">{product.count}</h3>
      <h2 className="nameproduct">{product.size.width}</h2>
      <h2 className="nameproduct">{product.size.height}</h2>
      <h2 className="nameproduct">{product.weight}</h2>
      <h2 className="nameproduct">{product.comments}</h2>
      <div className="details">
        <div>Edit</div>
      </div>
    </div>
  );
}

export default NewProductItemDetail;

const ImageComponent = ({ url }) => {
  return (
    <div>
      <img src={url} alt="pic" />
    </div>
  );
};
