<<<<<<< HEAD
import React, { Component } from "react";
import { Button, TextField } from '@material-ui/core';

class Schedule extends Component {
  render() {
    return(function Schedule(props) {
  console.log("formbtn props", props);
=======
import React, { useState, useEffect } from "react";
import { Button, Modal, Card, Form } from 'react-bootstrap';
import Event from "./Event";
import Notes from "./Notes";
import EditSchedule from "./EditSchedule";
import API from "../pages/utils/API";
// import schedule from "./utils/schedTest.js";
// import EditEvent from "./EditEvent";

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
    notes: "Please make sure to put rise an hang out the bathing suit in the bathroom when you get home."
}

// loadSchedule() (API call - handle form submit for the schedule page)
// function getSchedule

function Schedule(props) { // assume props=scheduleTest
  const [modalShow, setModalShow] = useState(false);
  const [eventList, updateEventList] = useState(scheduleTest.events);
  const [notes, updateNotes] = useState([]);
  const [schedule, updateSchedule] = useState(scheduleTest);
  console.log("TEST", schedule.day);

  console.log("Event List", eventList);
  console.log("test", eventList[0])
>>>>>>> 70341ed3a7e5cdd38482a57a4b982699ac80ca18
  return (
    <div>
      <h5>{schedule.day}</h5>
      <ul>
        {eventList.map((event, index) => (
          <div key={index}>
            <Event
              time={event.time}
              activity={event.activity}
            ></Event>
          </div>
        ))}
      </ul>
      <h5>Notes</h5>
      <p>{schedule.notes}</p>
      {/* <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label><h5>Notes</h5></Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group> */}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit Schedule
      </Button>
      <EditSchedule
        show={modalShow}
        onHide={() => setModalShow(false)}
        schedule={schedule}
      />
    </div>
  );
  }
    )}
}

<<<<<<< HEAD
export default Schedule;
=======
export default Schedule;
>>>>>>> 70341ed3a7e5cdd38482a57a4b982699ac80ca18
