import React from "react";

function Todo(props) {
  return (
    <div>
      <div className="card">
        <h2 className="title">{props.text}</h2>
        <div className="btnBox">
          <button className="btn">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
