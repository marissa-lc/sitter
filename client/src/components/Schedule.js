import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton, Modal, Form, Card } from 'react-bootstrap';
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

  function loadSchedule(day) {
    console.log("change schedule")
    API.getSchedule(day)
    .then(result => {
      result.data[0] && setSchedule(result.data[0]);
    })
    .catch(err => console.log(err));
  }

  // function onDaySelect(event, day) {
  //   event.preventDefault();
  //   loadSchedule(day);
  // }

  useEffect(() => {
    loadSchedule(day); // this is a test
    console.log(day);
  }, []);

  // function addEvent(event) {
  //   // schedule.event.post (add it to the end of the events array)
  //   // and then update the a
  //   schedule.events.push(event);
  // }

  // function deleteEvent(index) {
  //   // need the index of the event you want to delete in the array
  //   // how do I know which button pushing?
  // }

  function updateSchedule(schedule) { // save schedule
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

    <Card border="primary">
      <Card.Body>
        <DropdownButton drop="right" id="dropdown-basic-button" title="Select Day">
          <Dropdown.Item onSelect={() => loadSchedule("Sunday")}>Sunday</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onSelect={() => loadSchedule("Monday")}>Monday</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onSelect={() => loadSchedule("Tuesday")}>Tuesday</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onSelect={() => loadSchedule("Wednesday")}>Wednesday</Dropdown.Item>
          <Dropdown.Item href="#/action-5" onSelect={() => loadSchedule("Thursday")}>Thursday</Dropdown.Item>
          <Dropdown.Item href="#/action-6" onSelect={() => loadSchedule("Friday")}>Friday</Dropdown.Item>
          <Dropdown.Item href="#/action-7" onSelect={() => loadSchedule("Saturday")}>Saturday</Dropdown.Item>
        </DropdownButton>
        <Card.Title>{schedule.day}</Card.Title>
        <Card.Text>
          {schedule.events.map((event, index) => (
            <div key={index}>
              {event.time}: {event.activity}
            </div>
          ))}
          <h4>Notes</h4>
          <p>{schedule.notes}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Edit Schedule
        </Button>
        <EditSchedule
            show={modalShow}
            onHide={() => setModalShow(false)}
            schedule={schedule}
            // addEvent={addEvent}
            // deleteEvent={deleteEvent}
            // saveSchedule={updateSchedule}
            reloadSchedule={loadSchedule}
        />
      </Card.Footer>
      </Card>


    // <div>
    //   <DropdownButton drop="right" id="dropdown-basic-button" title="Select Day">
    //     <Dropdown.Item onSelect={() => loadSchedule("Sunday")}>Sunday</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2" onSelect={() => loadSchedule("Monday")}>Monday</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3" onSelect={() => loadSchedule("Tuesday")}>Tuesday</Dropdown.Item>
    //     <Dropdown.Item href="#/action-4" onSelect={() => loadSchedule("Wednesday")}>Wednesday</Dropdown.Item>
    //     <Dropdown.Item href="#/action-5" onSelect={() => loadSchedule("Thursday")}>Thursday</Dropdown.Item>
    //     <Dropdown.Item href="#/action-6" onSelect={() => loadSchedule("Friday")}>Friday</Dropdown.Item>
    //     <Dropdown.Item href="#/action-7" onSelect={() => loadSchedule("Saturday")}>Saturday</Dropdown.Item>
    //   </DropdownButton>

    //   <h5>{schedule.day}</h5>
    //     {schedule.events.map((event, index) => (
    //       <div key={index}>
    //         {event.time}: {event.activity}
    //       </div>
    //     ))}
    //   <h5>Notes</h5>
    //   <p>{schedule.notes}</p>

    //   <Button variant="primary" onClick={() => setModalShow(true)}>
    //     Edit Schedule
    //   </Button>
    //   <EditSchedule
    //       show={modalShow}
    //       onHide={() => setModalShow(false)}
    //       schedule={schedule}
    //       // addEvent={addEvent}
    //       // deleteEvent={deleteEvent}
    //       // saveSchedule={updateSchedule}
    //       reloadSchedule={loadSchedule}
    //     />

    // </div>
  );
  }

export default Schedule;
