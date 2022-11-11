import React from "react";
import "./Modal.css";

const Modal = ({ yes, no }) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-header">Are you sure to delete this Sticky?</div>
        <div className="modal-footer">
          <button className="modal-btn yes" onClick={() => yes()}>
            Yes
          </button>
          <button className="modal-btn no" onClick={() => no()}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
