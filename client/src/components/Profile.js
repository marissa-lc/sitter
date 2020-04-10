import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import AddBio from "./addBio";

const contactTest = {
  Name: "Baba",
  Age: "4",
  Type: "Child",
  notes: "Loves Unicorns and Spiderman. Has trouble listening sometimes but can be coerced with M&M's."
}

function Profile(props) {
  const [modalShow, setModalShow] = useState(false);

  console.log("event props", props);
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}><h5>Name:</h5></Col>
        <Col sm={12} md={9}>{contactTest.name}</Col>
      </Row>
      <Row>
        <Col sm={12} md={3}><h5>Age:</h5></Col>
        <Col sm={12} md={9}>{contactTest.age}</Col>
      </Row>
      <Row>
        <Col sm={12} md={3}><h5>Child or Pet:</h5></Col>
        <Col sm={12} md={9}>{contactTest.email}</Col>
      </Row>
      <br/>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit Profile
      </Button>
      <AddBio
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </Container>
  );
}

export default Profile;
