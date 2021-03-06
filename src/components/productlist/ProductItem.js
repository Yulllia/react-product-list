import { FaTimes } from "react-icons/fa";
import Modal from "../Modal.js";
import "./ProductItem.css";
import "../Modal.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductItem({ product, onDelete, id }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="product">
      <div>
        <ImageComponent url={product.imageUrl} />
      </div>
      <h2 className="nameproduct">{product.name}</h2>
      <h2 className="namecount">{product.count}</h2>
      <h3 className="description">{product.description}</h3>
      <FaTimes
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setModalActive(true)}
      />

      <Modal
        id={id}
        active={modalActive}
        setActive={setModalActive}
        onDelete={onDelete}
      ></Modal>

      <div className="details">
        <Link to={`/details/${id}`}>Details</Link>
      </div>
    </div>
  );
}
export default ProductItem;
const ImageComponent = ({ url }) => {
  return (
    <div>
      <img className="product-image" src={url} alt="pic" />
    </div>
  );
};
