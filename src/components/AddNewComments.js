import { useState } from "react";
import { useParams } from "react-router-dom";
import "./AddProductItem.css";

const AddNewComments = ({
  showAddComments,
  setShowAddComments,
  products,
  product,
  setProducts,
  today,
}) => {
  const [comments, setComments] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!comments) {
      alert("Please add new comments");
      return;
    }
  };
  const { id } = useParams();
  const commentId =
    (product?.comments[product?.comments.length - 1]?.id ?? -1) + 1;

  const comment = {
    description: comments,
    date: today,
    id: commentId,
    productId: product?.id,
  };
  function addNewProductComments() {
    products[+id].comments.push(comment);
    setProducts([...products]);
  }
  return (
    <form className="add-product" onSubmit={onSubmit}>
      <div
        className={showAddComments ? "modal active" : "modal"}
        onClick={() => setShowAddComments(false)}
      >
        <div
          className={showAddComments ? "modal_content active" : "modal"}
          onClick={(content) => content.stopPropagation()}
        >
          <div className="product-form">
            <div className="form-control">
              <label>Product comments</label>
              <textarea
                className="block-comments"
                type="text"
                placeholder="Comments"
                onChange={(el) => setComments(el.target.value)}
              ></textarea>
            </div>

            <div className="add-items">
              <button
                className="confirm-changes"
                value="Save product"
                onClick={() => {
                  setShowAddComments(false);
                  addNewProductComments();
                }}
              >
                Add
              </button>
              <button
                className="confirm-changes"
                value="Cancel product"
                onClick={() => setShowAddComments(false)}
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

export default AddNewComments;
