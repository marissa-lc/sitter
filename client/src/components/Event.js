import React, { useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import EditEvent from "./EditEvent";
// import CenteredModal from "./CenteredModal";

function Event(props) {
  console.log("event props", props);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <li>{props.time}: {props.activity}
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Edit
        </Button>
        <EditEvent
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </li>
    </div>
  );
}

export default Event;
