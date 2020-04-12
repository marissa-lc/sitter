import React, { useState, useEffect } from "react";
import { Button, Card, CardGroup, Image } from 'react-bootstrap';
import AddBio from "./AddBio";

const test = {
  imageURL: "/images/finn_adventure.jpg",
  name: "Finn",
  age: 7,
  type: "child",
  notes: "Finn is an independent child who is very attached to his dog."
}

const test2 = {
  imageURL: "/images/jake_adventure.jpg",
  name: "Jake",
  age: 7,
  type: "dog",
  notes: "Jake is is an amazingly flexible and loyal dog."
}

function Profile(props) {
  const [modalShow, setModalShow] = useState(false);

  console.log("event props", props);

  return (
    <div
    {...props}>
          {/* <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="justify-content-center">
                <h5>This profile is for a {test.type}</h5>
                <img src={test.imageURL} className="rounded-circle border" /><br />
              </div>
              <b>Name:</b> {test.name}<br />
              <b>Age:</b> {test.age}<br/>
              <b>Notes:</b> {test.notes}<br />
            </div>
            <div className="col-md-6 col-xs-12">
              <h5>This profile is for a {test2.type}</h5>
              <img src={test2.imageURL} className="rounded-circle border" /><br />
              <b>Name:</b> {test2.name}<br />
              <b>Age:</b> {test2.age}<br/>
              <b>Notes:</b> {test2.notes}<br />
            </div>
          </div> */}

        <CardGroup>
          <Card border="primary">
            <Card.Body>
              <Image src={test.imageURL} roundedCircle />
              <Card.Title>Profile for a {test.type}</Card.Title>
              <Card.Text>
                <b>Name:</b> {test.name}<br />
                <b>Age:</b> {test.age}<br/>
                <b>Notes:</b> {test.notes}<br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Image src={test2.imageURL} roundedCircle />
              <Card.Title>Profile for a {test2.type}</Card.Title>
              <Card.Text>
                <b>Name:</b> {test2.name}<br />
                <b>Age:</b> {test2.age}<br/>
                <b>Notes:</b> {test2.notes}<br />
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>


        <Button onClick={() => props.logoutClick()}>Logout</Button>
        <Button onClick={()=>setModalShow(true)}>Add Profile</Button>
      <AddBio
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Profile;