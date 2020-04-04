import React from "react";
import Event from "../components/Event";
import Notes from "../components/Notes";

function Sitter() {
  // const [formObject, setFormObject] = useState({
  //   fullName: "",
  //   email: "",
  //   message: ""
  // })

return (
  // This is what we show when the user is not authenticated
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>SITTER PAGE<span className="member-name" /></h2>
          <div>THIS IS WHERE THE PROFILE WILL GO</div>
          <Event>EVENTS</Event>
          <Notes>NOTES</Notes>
          <div>THIS IS WHERE THE EMERGENCY INFORMATION WILL GO</div>
        </div>
      </div>
    </div>
  </div>
  // We need to show something else if the user is authenticated
)}

export default Sitter;
