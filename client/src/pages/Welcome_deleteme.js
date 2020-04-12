import React, { useState, useEffect } from "react";
import AuthNavbar from "../components/AuthNavbar";
import Login from "../components/Login";
import Signup from "../components/Signup";

function Welcome() {
  const [isMember, getMemberStatus] = useState(true);
  const [isAuthenticated, getAuthStatus] = useState();
  // const [userState, getUserState] = useState();
  // const [formObject, setFormObject] = useState({
  //   fullName: "",
  //   email: "",
  //   message: ""
  //  keep track of signed in state here
  // })
  function test() {
    if (isMember) {
      return<Login />
     } else {
     return <Signup />
     }
  }

return (
  // This is what we show when the user is not authenticated
  <div>
    <AuthNavbar></AuthNavbar>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Welcome to Sitter!<span className="member-name" /></h2>
        </div>
      </div>
    </div>
    {test()}
  </div>
  // We need to show something else if the user is authenticated
)}

export default Welcome;