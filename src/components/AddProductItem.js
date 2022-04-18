import { useState } from "react";
import "./productlist/ProductItem.css";
import { useParams } from "react-router-dom";

const AddProductItem = ({
  showAddProductItem,
  setShowAddProductItem,
  products,
  product,
  setProducts,
  isEdit,
}) => {
  const [image, setImage] = useState(product?.imageUrl ?? "");
  const [name, setName] = useState(product?.name ?? "");
  const [quantity, setQuantity] = useState(product?.count ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [width, setWidth] = useState(product?.size?.width ?? "");
  const [height, setHeight] = useState(product?.size?.height ?? "");
  const [weight, setWeight] = useState(product?.weight ?? "");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please add image");
      return;
    }
  };
  console.log(product);
  const newProductItem = {
    id: product?.id,
    imageUrl: image,
    name: name,
    count: quantity,
    description: description,
    size: {
      width: width ?? "",
      height: height ?? "",
    },
    weight: weight ?? "",
    comments: product?.comments ?? [],
  };

  console.log(isEdit);

  const { id } = useParams();
  async function addNewProductItem(newProductItem, isEdit) {
    if (!isEdit) {
      const response = await fetch("/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductItem),
      });
      const data = await response.json();
      setProducts([data, ...products]);
    }
  }

  async function editProductItem(newProductItem) {
    const response = await fetch(`/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductItem),
    });
    const data = await response.json();
    console.log(data);
    products[products.findIndex((el) => el.id === id)] = newProductItem;
    console.log(products);
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
            {isEdit && (
              <div className="form-control">
                <div className="form-control">
                  <label>Width</label>
                  <input
                    type="number"
                    placeholder="Width"
                    value={width}
                    onChange={(el) => setWidth(el.target.value)}
                  ></input>
                </div>

                <div className="form-control">
                  <label>Height</label>
                  <input
                    type="number"
                    placeholder="Height"
                    value={height}
                    onChange={(el) => setHeight(el.target.value)}
                  ></input>
                </div>

                <div className="form-control">
                  <label>Weight</label>
                  <input
                    type="text"
                    placeholder="Weight"
                    value={weight}
                    onChange={(el) => setWeight(el.target.value)}
                  ></input>
                </div>
              </div>
            )}

            <div className="add-items">
              <button
                className="confirm-changes"
                value="Save product"
                onClick={() => {
                  setShowAddProductItem(false);
                  !isEdit && addNewProductItem(newProductItem);
                  isEdit && editProductItem(newProductItem);
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
      </div>
    </form>
  );
};

export default AddProductItem;
