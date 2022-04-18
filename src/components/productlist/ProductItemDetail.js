import { useState } from "react";
import "./DetailedProductList.css";
import AddProductItem from "../AddProductItem.js";
import AddNewComments from "../AddNewComments";

function ProductItemDetail({ product, products, setProducts, newProductItem }) {
  const [showAddProductItem, setShowAddProductItem] = useState(false);
  const [showAddComments, setShowAddComments] = useState(false);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let hh = today.getHours();
  let ss = today.getSeconds();
  console.log(products);
  today = hh + ":" + ss + "  " + mm + "." + dd + "." + yyyy;

  return (
    <div className="product-details">
      <div className="block-content">
        <div className="image-block">Image</div>
        <ImageComponent className="image-content" url={product?.imageUrl} />
      </div>
      <div className="block-content">
        <div className="text-description">Description</div>
        <h3 className="product-description">{product?.description}</h3>
      </div>
      <div className="block-content">
        <div className="text-description">Count</div>
        <h3 className="product-description">{product?.count}</h3>
      </div>
      <div className="block-content">
        <div className="text-description">Width</div>
        <h2 className="product-description">{product?.size?.width}</h2>
      </div>
      <div className="block-content">
        <div className="text-description">Height</div>
        <h2 className="product-description">{product?.size?.height}</h2>
      </div>
      <div className="block-content">
        <div className="text-description">Weight</div>
        <h2 className="product-description">{product?.weight}</h2>
      </div>
      <div className="buttons">
        <div className="edit">
          <div
            onClick={() => {
              setShowAddProductItem(true);
            }}
          >
            Edit
          </div>
        </div>
        <div className="add-comment">
          <div
            onClick={() => {
              setShowAddComments(true);
            }}
          >
            Add New Comment
          </div>
        </div>
      </div>
      <AddProductItem
        isEdit={true}
        showAddProductItem={showAddProductItem}
        setShowAddProductItem={setShowAddProductItem}
        products={products}
        setProducts={setProducts}
        product={product}
        newProductItem={newProductItem}
      />
      <AddNewComments
        showAddComments={showAddComments}
        setShowAddComments={setShowAddComments}
        products={products}
        setProducts={setProducts}
        product={product}
        today={today}
      />
    </div>
  );
}

export default ProductItemDetail;

const ImageComponent = ({ url }) => {
  return (
    <div>
      <img className="image-detail" src={url} alt="pic" />
    </div>
  );
};
