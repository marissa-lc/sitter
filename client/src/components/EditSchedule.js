import React from "react";
import { Button, Modal, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import API from "../pages/utils/API";

const scheduleTest = {
  day: "Monday",
  events: [{
      time: "1:00 pm",
      activity: "swimming lessons"
    },
    {
      time: "2:30 pm",
      activity: "homework"
    },
    {
      time: "4:00 pm",
      activity: "screen time (1 hour)"
    }],
    Notes: "Please make sure to put rise an hang out the bathing suit in the bathroom when you get home."
}

// do we know if the database has something in it?
// is there anything to load? (are we already showing a schedule?)
// if so, edit that, otherwise, create a new record
// if the day name is the same, replace the existing schedule for that day
// otherwise, create a new item in the database
function updateSchedule(sched) {
  console.log("INSIDE UPDATESCHEDULE");
  API.getSchedule(sched.day)
  .then(result => {
    console.log("result", result);
    if (!result) {
      API.saveSchedule(sched)
    }
  })
  .catch(err => console.log(err));
}

function saveSchedule(sched) {
  //TBD
}


function EditSchedule(props) {
  console.log("EditSchedule props", props);
  // the props that get passed into this page are:
  //day and events

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
          <Form.Group controlId="day">
            {/* <Form.Label>Day</Form.Label> */}
            <DropdownButton drop="right" id="dropdown-basic-button" title="Select Day">
              <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Wednesday</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Thursday</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Friday</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Saturday</Dropdown.Item>
            </DropdownButton>
            <Form.Control placeholder={props.schedule.day} />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>
{/* 
          <Form.Group controlId="events">
            <Form.Label>{props.events[0].time}</Form.Label>
            <Form.Control placeholder="TEMPORARY" />
          </Form.Group> */}
          <ul>
            {props.schedule.events.map((event, index) => (
              <div key={index}>
                <Form.Group controlId="events">
                  <Form.Label>Event</Form.Label>
                  <Form.Control placeholder={event.time} />
                  <Form.Control placeholder={event.activity} />
                </Form.Group>
              </div>
            ))}
          </ul>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => updateSchedule(props.schedule)}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditSchedule;
