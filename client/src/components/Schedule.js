import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import EditSchedule from "./EditSchedule";
import API from "../pages/utils/API";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Schedule() {
  const [modalShow, setModalShow] = useState(false);
  const [day, setDay] = useState(
    daysOfWeek[new Date().getDay()]
  )
  const [schedule, setSchedule] = useState({
    day: "",
    events: [],
    notes: ""
  });

  function loadschedule(day) {
    console.log("change schedule")
    API.getSchedule(day)
    .then(result => {
      console.log(result);
      result.data[0] && setSchedule(result.data[0]);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    loadschedule(day); // this is a test
    console.log(day);
  }, []);

  function addEvent(newEvents) {
    // schedule.event.post (add it to the end of the events array)
    // and then somehow the form needs to be updated
    schedule.events.push({
      time: "",
      activity: ""
    })
  }

  function deleteEvent(index) {
    // need the index of the event you want to delete in the array
    // how do I know which button pushing?
  }

  function saveSchedule(schedule) { // save schedule
    schedule.preventDefault();
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
        <Dropdown.Item href="#/action-1" onSelect={() => loadschedule("Sunday")}>Sunday</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onSelect={() => loadschedule("Monday")}>Monday</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onSelect={() => loadschedule("Tuesday")}>Tuesday</Dropdown.Item>
        <Dropdown.Item href="#/action-4" onSelect={() => loadschedule("Wednesday")}>Wednesday</Dropdown.Item>
        <Dropdown.Item href="#/action-5" onSelect={() => loadschedule("Thursday")}>Thursday</Dropdown.Item>
        <Dropdown.Item href="#/action-6" onSelect={() => loadschedule("Friday")}>Friday</Dropdown.Item>
        <Dropdown.Item href="#/action-7" onSelect={() => loadschedule("Saturday")}>Saturday</Dropdown.Item>
      </DropdownButton>

      <h5>{schedule.day}</h5>
      <ul>
        {schedule.events.map((event, index) => (
          <div key={index}>
            {/* <Event */}
            time={event.time}
            activity={event.activity}
            {/* ></Event> */}
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
        // loadDailySchedule={loadailyschedule}
        saveSchedule={saveSchedule}
      />
    </div>
  );
  }

export default Schedule;
