import React from "react";
import Schedule from "../components/Schedule";
// import Notes from "../components/Notes";
import Emergency from "../components/Emergency";

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
          <Schedule></Schedule>
          <Emergency></Emergency>
        </div>
      </div>
    </div>
  </div>
  // We need to show something else if the user is authenticated
)}

export default Sitter;
