import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import EmerEntry from "./EmerEntry.js";
// import CenteredModal from "./CenteredModal";

function Emergency(props) {
  const [modalShow, setModalShow] = useState(false);

  console.log("event props", props);
  return (
    <div>
      First Name, Last Name<br/>
      Relationship<br/>
      Address<br/>
      Phone Number<br/>
      email address<br/>
      Allergies and conditions:<br/>
      blablabla

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <EmerEntry
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Emergency;
