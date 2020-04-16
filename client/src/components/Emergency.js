import React, { useState } from "react";
import { Button, CardGroup, Card } from 'react-bootstrap';
import EmerEntry from "./EmerEntry";
// import CenteredModal from "./CenteredModal";

const contactTest = {
  firstname: "Bridget",
  lastname: "Jones",
  relationship: "Aunt",
  address: "1234 NW 25th Ave.",
  city: "Portland",
  state: "OR",
  phone: "503-555-5555",
  email: "bjones1234@gmail.com",
  notes: "Bridget has permission to come over and stay, or transport Finn and/or Jake somewhere if needed."
}

const contactTest2 = {
  firstname: "James",
  lastname: "Feelgood",
  relationship: "Pediatrician",
  address: "12 SW Stark",
  city: "Portland",
  state: "OR",
  phone: "503-555-5555",
  email: "feelgood@doctor.com",
  notes: "Contact for any allergies."
}

function Emergency(props) {
  const [modalShow, setModalShow] = useState(false);

  console.log("event props", props);
  return (
    <div>
    <CardGroup>
    <Card border="primary">
      <Card.Body>
        {/* <Card.Title>Emergency Contact</Card.Title> */}
        <Card.Text>
          <b>Name:</b> {contactTest.firstname + " " + contactTest.lastname}<br />
          <b>Relationship:</b> {contactTest.relationship}<br/>
          <b>Adress:</b> {contactTest.address + " " + contactTest.city + ", " + contactTest.state}<br />
          <b>Phone Number:</b> {contactTest.phone}<br/>
          <b>Eail Address:</b> {contactTest.email}<br/>
          <b>Allergies and Conditions:</b><br/> {contactTest.notes}<br/>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary">Edit Contact</Button>
        <Button variant="secondary">Delete</Button>
        <EmerEntry
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Footer>
    </Card>

    <Card border="primary">
      <Card.Body>
        {/* <Card.Title>Emergency Contact</Card.Title> */}
        <Card.Text>
          <b>Name:</b> {contactTest.firstname + " " + contactTest.lastname}<br />
          <b>Relationship:</b> {contactTest.relationship}<br/>
          <b>Adress:</b> {contactTest.address + " " + contactTest.city + ", " + contactTest.state}<br />
          <b>Phone Number:</b> {contactTest.phone}<br/>
          <b>Eail Address:</b> {contactTest.email}<br/>
          <b>Allergies and Conditions:</b><br/> {contactTest.notes}<br/>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary">Edit Contact</Button>
        <Button variant="secondary">Delete</Button>
        <EmerEntry
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Footer>
    </Card>
    </CardGroup>

  <Button onClick={()=>setModalShow(true)}>Add Emergency Contact</Button>
</div>

  );
}

export default Emergency;
