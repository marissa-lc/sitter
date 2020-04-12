import React, {useEffect, useState} from "react";
import { Accordion, Card, Image, Col, Button } from 'react-bootstrap';
import Schedule from "../components/Schedule";
import Emergency from "../components/Emergency";
import Profile from "../components/Profile";
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
  <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body className="">
        <Image fluid src="/images/sitter-logo.png" className="center"/>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        <h4>Profile</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
            <Profile 
              logoutClick={logout}
            ></Profile>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="2">
        <h4>Schedule</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          <Schedule></Schedule>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="3">
        <h4>Emergency Contact Information</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="3">
        <Card.Body>
          <Emergency></Emergency>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)}

export default Sitter;
