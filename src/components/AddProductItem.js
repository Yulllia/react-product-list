import { useState } from "react";
import "./productlist/ProductItem.css";
const AddProductItem = ({
  showAddProductItem,
  setShowAddProductItem,
  products,
  setProducts,
}) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add name product");
      return;
    }
  };
  const newProductItem = {
    imageUrl: image,
    name: name,
    count: quantity,
    description: description,
  };
  function addNewProductItem(newProductItem) {
    products.push(newProductItem);
    setProducts([...products]);
  }

  return (
    <form className="add-product" onSubmit={onSubmit}>
      <div
        className={showAddProductItem ? "modal active" : "modal"}
        onClick={() => setShowAddProductItem(false)}
      >
        <div
          className={showAddProductItem ? "modal_content active" : "modal"}
          onClick={(content) => content.stopPropagation()}
        >
          <div className="product-form">
            <div className="form-control">
              <label>Product image</label>
              <input
                type="text"
                placeholder="Image url"
                value={image}
                onChange={(el) => setImage(el.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label>Product name</label>
              <input
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(el) => setName(el.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label>Product quantity</label>
              <input
                type="number"
                placeholder="Product quantity"
                value={quantity}
                onChange={(el) => setQuantity(el.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label>Product description</label>
              <input
                type="text"
                placeholder="Product description"
                value={description}
                onChange={(el) => setDescription(el.target.value)}
              ></input>
            </div>
          </div>
          <div className="add-items">
            <button
              className="confirm-changes"
              value="Save product"
              onClick={() => {
                setShowAddProductItem(false);
                addNewProductItem(newProductItem);
              }}
            >
              Add
            </button>
            <button
              className="confirm-changes"
              value="Cancel product"
              onClick={() => setShowAddProductItem(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProductItem;
