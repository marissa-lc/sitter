import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import API from "../pages/utils/API";
// import Schedule from "./Schedule";

// function updateSchedule(sched) {
//   console.log(sched)
//   API.getSchedule(sched.day)
//   .then(result => {
//     if (result.data[0]==[]) {
//       console.log("saving")
//       API.saveSchedule(sched)
//     } else {
//       console.log("doing something else")
//       API.updateSchedule(sched)
//     }
//   })
//   .catch(err => console.log(err));
// }


function EditSchedule(props) {
  const [newSched, setNewSched] = useState(props.schedule); // this totally doesn't work
  const [newEvents, setEvents] = useState([]);
  let updatedSched = {
    day: "",
    events: [],
    notes: ""
  };
  // const { updateSchedule } = useForm();
  // const newNotes = useRef(null);

  useEffect(() => {
    // console.log(newNotes);
    // console.log("just book data", bookData);
    // console.log(bookData[0].volumeInfo.imageLinks);
    // console.log("FORMOBJECT", formObject);
  })

  function submitNewSched(event) {
    console.log(event);
    event.preventDefault();
    updateSchedule(updatedSched);
  }

  function updateSchedule(schedule) { // save schedule
    console.log(schedule);
    API.getSchedule(schedule.day)
    .then(result => {
      if (result.data[0]===[]) {
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

  function setNewValue(event) {
    updatedSched.day = props.schedule.day;
    updatedSched.events = props.schedule.events;
    let name = event.nativeEvent.target.getAttribute("name");
    let idx = event.nativeEvent.target.parentNode.getAttribute("idx");
    let value = event.nativeEvent.target.value;

    let newValue = event.nativeEvent.target.value;
    console.log(updatedSched.events);
    console.log(props.schedule.day);
    console.log(newValue);
    console.log(event.nativeEvent.target.parentNode);
    console.log(idx);
    console.log(name);

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
        <Form.Label>{props.schedule.day}</Form.Label>
          {/* <ul> */}
            {props.schedule.events.map((event, index) => (
              <div key={index}>
                <Form.Group idx={index}>
                  <Form.Label size="sm">Event</Form.Label>
                  <Form.Control name="time" onBlur={event=>setNewValue(event)} placeholder={event.time} size="sm"></Form.Control>
                  <Form.Control name="activity" onBlur={event=>setNewValue(event)} placeholder={event.activity} size="sm"></Form.Control>
                </Form.Group>
              </div>
            ))}
          {/* </ul> */}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><h5>Notes</h5></Form.Label>
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
        {/* <Button onClick={(event)=>props.saveSchedule(event)}>Save</Button> */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditSchedule;
