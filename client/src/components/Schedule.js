import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Event from "./Event";
import Notes from "./Notes";
import EditSchedule from "./EditSchedule";
import API from "../pages/utils/API";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Schedule() {
  const [modalShow, setModalShow] = useState(false);
  const [day, setDate] = useState(
    daysOfWeek[new Date().getDay()]
  )
  const [schedule, updateSchedule] = useState({
    day: "",
    events: [],
    notes: ""
  });

  function loadDailySchedule(day) {
    API.getSchedule(day)
    .then(result => {
      console.log(result);
      result.data[0] && updateSchedule(result.data[0]);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    loadDailySchedule(day); // this is a test
    console.log(day);
  }, []);

  function addEvent(newEvents) {
    // schedule.event.post (add it to the end of the events)
    schedule.events.push({
      time: "",
      activity: ""
    })
  }

  function deleteEvent(index) {
    // need the index of the event you want to delete
  }

  function saveSchedule(event) { // save schedule
    event.preventDefault();
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

  // console.log("Event List", eventList);
  return (
    <div>
      <DropdownButton drop="right" id="dropdown-basic-button" title="Select Day">
        <Dropdown.Item href="#/action-1" onSelect={() => loadDailySchedule("Sunday")}>Sunday</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onSelect={() => loadDailySchedule("Monday")}>Monday</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onSelect={() => loadDailySchedule("Tuesday")}>Tuesday</Dropdown.Item>
        <Dropdown.Item href="#/action-4" onSelect={() => loadDailySchedule("Wednesday")}>Wednesday</Dropdown.Item>
        <Dropdown.Item href="#/action-5" onSelect={() => loadDailySchedule("Thursday")}>Thursday</Dropdown.Item>
        <Dropdown.Item href="#/action-6" onSelect={() => loadDailySchedule("Friday")}>Friday</Dropdown.Item>
        <Dropdown.Item href="#/action-7" onSelect={() => loadDailySchedule("Saturday")}>Saturday</Dropdown.Item>
      </DropdownButton>

      <h5>{schedule.day}</h5>
      <ul>
        {schedule.events.map((event, index) => (
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

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit Schedule
      </Button>
      <EditSchedule
        show={modalShow}
        onHide={() => setModalShow(false)}
        schedule={schedule}
        addEvent={addEvent}
        deleteEvent={deleteEvent}
        saveSchedule={saveSchedule}
      />
    </div>
  );
  }

export default Schedule;
