import React, { useState, useEffect } from "react";
import Event from "./Event";
import Notes from "./Notes";

const events=[{
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
}];

function Schedule() {
  const [eventList, updateEventList] = useState(events);
  const [notes, updateNotes] = useState([]);

  console.log("Event List", eventList);
  console.log("test", eventList[0])
  return (
    <div>
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
    </div>
  );
}

export default Schedule;
