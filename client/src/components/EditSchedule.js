import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import API from "../pages/utils/API";

function EditSchedule(props) {
  const [eventsList, setEventsList] = useState([]);
  const updatedSched = {
    day: "",
    events: [],
    notes: ""
  };
  // const [updateSched, setUpdatedSched] = useState(updatedSched.events);

  function submitNewSched(event) {
    event.preventDefault();
    console.log(event);
    if (updatedSched.day || updatedSched.notes) {
      updateSchedule(updatedSched);
    }
  }

  function updateSchedule(schedule) {
    console.log(schedule);
    API.getSchedule(schedule.day)
    .then(result => {
      if (result.data[0]===[]) {
        console.log("saving")
        API.saveSchedule(schedule)
      } else {
        console.log("updating");
        API.updateSchedule(schedule)
        .then(()=> props.reloadSchedule(updatedSched.day));
      }
    })
    .catch(err => console.log(err));
  }

  function setNewValue(event) {
    event.preventDefault();
    updatedSched.day = props.schedule.day;
    updatedSched.events = props.schedule.events;
    let name = event.nativeEvent.target.getAttribute("name");
    let idx = event.nativeEvent.target.parentNode.getAttribute("idx");
    let value = event.nativeEvent.target.value;
    if (value) {
      if (idx && name === "time") {
        updatedSched.events[idx].time = value;
      }
      else if (idx) {
        updatedSched.events[idx].activity = value;
      } else {
        updatedSched.notes = value;
      }
    }
    console.log(updatedSched);
  }

  function addEvent() {
    console.log("add event");
    updatedSched.events.push({
      time: "",
      activity: ""
    })
    console.log(updatedSched.events);
    setEventsList(updatedSched.events);
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
      <Form onSubmit={submitNewSched}>
        <Form.Label><h5>{props.schedule.day}</h5></Form.Label>
            {props.schedule.events.map((event, index) => (
              <div key={index}>
                <Form.Group idx={index}>
                  <Form.Label size="sm">Event</Form.Label>
                  <Form.Control
                    name="time"
                    onBlur={event=>setNewValue(event)}
                    placeholder={event.time}
                    size="sm"
                    />
                  <Form.Control
                    name="activity"
                    onBlur={event=>setNewValue(event)}
                    placeholder={event.activity}
                    size="sm"/>
                </Form.Group>
              </div>
            ))}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              name="notes"
              onBlur={event=>setNewValue(event)}
              as="textarea"
              rows="3"
              size="sm"
              placeholder={props.schedule.notes}
              />
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>addEvent()}>Add Event</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditSchedule;
