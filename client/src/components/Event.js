import React from "react";

function Event(props) {
  console.log("event props", props);
  return (
    <div>
      <li>{props.time}: {props.activity} <button>Edit</button></li>
    </div>
  );
}

export default Event;
