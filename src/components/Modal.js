import React from "react";
import "../components/Modal.css";
const Modal = ({ active, setActive, onDelete, id }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal"}
        onClick={(content) => content.stopPropagation()}
      >
        <div>
          <p className="title">Do you submit operation?</p>
          <div>
            <div className="confirm">
              <button
                className="confirmButton"
                onClick={() => {
                  onDelete(id);
                  setActive(false);
                }}
              >
                YES
              </button>

              <button
                className="confirmButton"
                onClick={() => setActive(false)}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
