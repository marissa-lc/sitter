import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
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
  notes: "Allergic to tree nuts (almonds, walnuts, etc.). Bring epi pen on all outings just in case."
}

function Emergency(props) {
  const [modalShow, setModalShow] = useState(false);

  console.log("event props", props);
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}><h5>Name:</h5></Col>
        <Col sm={12} md={9}>{contactTest.firstname + " " + contactTest.lastname}</Col>
      </Row>
      <Row>
        <Col sm={12} md={3}><h5>Relationship:</h5></Col>
        <Col sm={12} md={9}>{contactTest.relationship}</Col>
      </Row>
      <Row>
      <Col sm={12} md={3}><h5>Address</h5></Col>
      <Col sm={12} md={9}>{contactTest.address + " " + contactTest.city + ", " + contactTest.state}</Col>
      </Row>
      <Row>
        <Col sm={12} md={3}><h5>Phone Number:</h5></Col>
        <Col sm={12} md={9}>{contactTest.phone}</Col>
      </Row>
      <Row>
        <Col sm={12} md={3}><h5>email address:</h5></Col>
        <Col sm={12} md={9}>{contactTest.email}</Col>
      </Row>
      <Row>
        <Col sm={12}><h5>Allergies and conditions:</h5></Col>
        <Col sm={12}>{contactTest.notes}</Col>
      </Row>
      <br/>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit Emergency Contact
      </Button>
      <EmerEntry
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </Container>
  );
}

export default Emergency;
