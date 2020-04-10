import React, {useEffect, useState} from "react";
import { Accordion, Card, Image, Col, Row, Container } from 'react-bootstrap';
import Schedule from "../components/Schedule";
import Emergency from "../components/Emergency";
import axios from "axios";
import API from "./utils/API";

function Sitter() {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    axios.get('/api/checkToken')
      .then(res => {
        if (res.status === 200) {
          setLoading(true);
        } else {
          logout();
        }
      })
      .catch(err => {
        console.error(err);
        logout();
      });
  }, []);


  function logout() {
    API.logout()
      .then(res => {
        window.location = '/';
      })
      .catch(err => {
        console.log(err);
      })
    }

return (
  // This is what we show when the user is not authenticated
  <div>   
  <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <h4>Profile</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>THIS IS WHERE THE PROFILE WILL GO <br/>

          <Col xs={6} md={4}>
            <Image src="/images/finn_adventure.jpg" roundedCircle />
          </Col>

          <button onClick={logout}>Logout</button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        <h4>Schedule</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          <Schedule></Schedule>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="2">
        <h4>Emergency Contact Information</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          <Emergency></Emergency>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  </div>
  // We need to show something else if the user is authenticated
)}

export default Sitter;