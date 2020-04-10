import React from 'react';
// import React, { useState } from "react";
import {Button, Modal, Form,  } from 'react-bootstrap'; 
// Dropdown, DropdownButton, FormControl, 
import API from "../pages/utils/API";

function updateSchedule(sched) {
  console.log(sched)
  API.getSchedule(sched.day)
  .then(result => {
    if (result.data[0]===[]) {
      console.log("saving")
      API.saveSchedule(sched)
    } else {
      console.log("doing something else")
      API.updateSchedule(sched)
    }
  })
  .catch(err => console.log(err));
}



function EditSchedule(props) {
  // const [dayField, setDayField] = useState("");
  // const [newSched, setNewSched] = useState(props.schedule)
  console.log("EditSchedule props", props);

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Schedule
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Day</Form.Label>
            {/* TODO: onSelect handler in the next line that updates the UI*/}
            <Form.Control as="select" size="sm"> 
              <option value="" disabled selected hidden>{props.schedule.day}</option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </Form.Control>
          </Form.Group>

          <ul>
            {props.schedule.events.map((event, index) => (
              <div key={index}>
                <Form.Group controlId="events">
                  <Form.Label size="sm">Event</Form.Label>
                  <Form.Control placeholder={event.time} size="sm"></Form.Control>
                  <Form.Control placeholder={event.activity} size="sm"/>
                </Form.Group>
              </div>
            ))}
          </ul>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><h5>Notes</h5></Form.Label>
            <Form.Control as="textarea" rows="3" size="sm"/>
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.editSchedule(props.saveSchedule)}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditSchedule;
