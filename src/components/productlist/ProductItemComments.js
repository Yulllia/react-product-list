import { FaTimes } from "react-icons/fa";
import "./ProductItem.css";
import "../Modal.css";
import { useState } from "react";
import "./DetailedProductList.css";
import Modal from "../Modal";

function ProductItemComments({ comment, onDelete, id }) {
  const [modalCommentsActive, setModalCommentsActive] = useState(false);
  return (
    <div className="block">
      <div className="text-description">Comment</div>
      <div className="text-block">
        <div className="comments">
          description:{" "}
          <h2 className="comments-description">
            {comment.description}
            <FaTimes
              className="delete-comments"
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => setModalCommentsActive(true)}
            />
          </h2>
          <Modal
            id={id}
            active={modalCommentsActive}
            setActive={setModalCommentsActive}
            onDelete={onDelete}
          ></Modal>
        </div>
        <div className="comments">date: {comment.date}</div>
      </div>
    </div>
  );
}

export default ProductItemComments;
