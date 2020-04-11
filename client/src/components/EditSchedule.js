import React, { useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import API from "../pages/utils/API";
// import Schedule from "./Schedule";

function updateSchedule(sched) {
  console.log(sched)
  API.getSchedule(sched.day)
  .then(result => {
    if (result.data[0]==[]) {
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
  const [newSched, setNewSched] = useState(props.schedule); // this totally doesn't work
  const [newEvents, setEvents] = useState([]);
  const [newNotes, setNotes] = useState(props.schedule.notes);

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(event);
    console.log(event.target.value);
    updateSchedule(event.target.value);
  }

  function saveSchedule(schedule) { // save schedule
    // event.preventDefault();
    console.log(schedule);
    API.getSchedule(schedule.day)
    .then(result => {
      if (result.data[0]==[]) {
        console.log("saving")
        API.saveSchedule(schedule)
      } else {
        console.log("doing something else");
        //TODO: make sure the form also closes
        API.updateSchedule(schedule);
      }
    })
    .catch(err => console.log(err));
  }

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
        <Form.Label>{props.schedule.day}</Form.Label>
          <ul>
            {props.schedule.events.map((event, index) => (
              <div key={index}>
                <Form.Group controlId="events">
                  <Form.Label size="sm">Event</Form.Label>
                  <Form.Control placeholder={event.time} size="sm" onChange={newEvents[index]===event.time}></Form.Control>
                  <Form.Control placeholder={event.activity} size="sm"></Form.Control>
                </Form.Group>
              </div>
            ))}
          </ul>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><h5>Notes</h5></Form.Label>
            <Form.Control as="textarea" rows="3" size="sm">{props.schedule.notes}</Form.Control>
          </Form.Group>
          <Button onSubmit={()=>saveSchedule(props.schedule)}>Save</Button>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        {/* <Button onSubmit={()=>saveSchedule(props.schedule)}>Save</Button> */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditSchedule;
