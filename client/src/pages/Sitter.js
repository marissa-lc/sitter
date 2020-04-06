import React from "react";
import AuthNavbar from "../components/AuthNavbar";
// import Footer from "../components/Footer";
// import ProjectList from "../components/ProjectList";

function Sitter() {
  // const [formObject, setFormObject] = useState({
  //   fullName: "",
  //   email: "",
  //   message: ""
  // })

return (
  // This is what we show when the user is not authenticated
  <div>
    <AuthNavbar></AuthNavbar>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>SITTER PAGE<span className="member-name" /></h2>
        </div>
      </div>
    </div>
  </div>
  // We need to show something else if the user is authenticated
)}

export default Sitter;