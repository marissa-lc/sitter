import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import AddBio from "./AddBio";

const test = {
  name: "Finn",
  age: 7,
  type: "child",
  notes: "Finn is an independent child who is very attached to his dog."
}

function Profile(props) {
  const [modalShow, setModalShow] = useState(false);

  console.log("event props", props);

  return (
    <div
    {...props}>
          <div className="row">
            <div className="col-sm-12 col-md-4"> <img src="/images/finn_adventure.jpg" className="rounded-circle" /></div>
            <div className="col-sm-12 col-md-8">
            This is a profile for a {test.type} <br />
              Name: {test.name} <br/>
              Age: {test.age} <br/>
              Notes: {test.notes} <br />
            </div>
          </div>
        <Button onClick={() => props.logoutClick()}>Logout</Button>
        <Button onClick={()=>setModalShow(true)}>Edit Profile</Button>
      <AddBio
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Profile;