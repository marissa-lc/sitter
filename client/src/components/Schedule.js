import React, { useState, useEffect } from "react";
import { Button, Modal, Card } from 'react-bootstrap';
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
    Notes: "Please make sure to put rise an hang out the bathing suit in the bathroom when you get home."
}

// loadSchedule() (API call - handle form submit for the schedule page)

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

function Schedule(props) { // assume props=scheduleTest
  const [modalShow, setModalShow] = useState(false);
  const [eventList, updateEventList] = useState(scheduleTest.events);
  const [notes, updateNotes] = useState([]);
  const [schedule, updateSchedule] = useState(scheduleTest);
  console.log("TEST", schedule.day);

  console.log("Event List", eventList);
  console.log("test", eventList[0])
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

export default Schedule;
