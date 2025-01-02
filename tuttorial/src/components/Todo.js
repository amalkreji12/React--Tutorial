import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isModelOpen, setIsModalOpen] = useState(false);

  function handleDelete() {
    setIsModalOpen(true);
  }

  function handleCloseModel() {
    setIsModalOpen(false);
  }

  return (
    <div className="todoBox">
      <div className="card">
        <h2 className="title">{props.text}</h2>
        <div className="btnBox">
          <button className="btn" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
      {isModelOpen && <Modal handleCloseModel={handleCloseModel} onConfirm={handleCloseModel}/>}
      {isModelOpen && <Backdrop handleCloseModel={handleCloseModel} />}
    </div>
  );
}

export default Todo;
