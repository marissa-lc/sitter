import React from "react";
import Event from "./Event";
import Notes from "./Notes";

function Schedule(props) {
  const [eventList, updateEventList] = useState([]);
  const [notes, updateNotes] = useState([]);

  // do functions for editing the events go here?

  console.log("schedule props", props);
  return (
    <div>
      {eventList.items.map((event, index) => (
        <div key={index}>
          <Event
            time={event.time}
            activity={event.activity}
          ></Event>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
