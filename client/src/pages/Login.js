import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import API from "./utils/API";

function Login() {
  const [formObject, setFormObject] = useState({
    userEmail: "",
    userPassword: "",
    errorMessage: "Please enter correct information",
    displayError: false     
 })

 function saveInputs(event) {
   const keyName = event.target.name;
   const keyValue = event.target.value;
   setFormObject({ ...formObject, [keyName] : keyValue, displayError: false});
 }

 function loginForm (event) {    
  event.preventDefault();
  if (!formObject.userEmail || !formObject.userPassword) {
    setFormObject({ ...formObject, errorMessage: "Please enter an email and password", displayError: true })
     return;
  }
  // If we have an email and password we run the loginUser function and clear the form
  loginUser(formObject.userEmail, formObject.userPassword);
  setFormObject({ ...formObject, userEmail: "", userPassword: ""});
}

 function loginUser(email, password) {
  //  axios
  //    .post("/api/login", {
  //    email: email,
  //    password: password
  //  })
    API.login(email, password)
    .then(res => {
      // window.location = '/sitter';
      window.location.replace("/sitter");
    })
    .catch(err => {
      setFormObject({ ...formObject, errorMessage: "Invalid Username/Password", displayError: true })
    })
 }

return (
  <div className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h3>Log in to Sitter</h3>
          <form className="login">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input value={formObject.userEmail} name="userEmail" onChange={saveInputs} type="email" className="form-control" id="email-input1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input value={formObject.userPassword} name="userPassword" onChange={saveInputs} type="password" className="form-control" id="password-input1" placeholder="Password" />
            </div>
            <div style={{display: formObject.displayError ? 'block' : 'none'}} id="alert" className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
              <span className="sr-only">Error:</span> <span className="msg">{formObject.errorMessage}</span>
            </div>          
            {/* <button onClick={loginForm} type="submit" className="btn btn-default">Login</button> */}
            <Button color="inherit" onClick={loginForm} type="submit">Log In</Button>
          </form>
          <br />
          {/* <p><a href="/">Home</a></p> */}
          {/* this needs to change to be  */}
          {/* <p>Not already a member? Sign up <a href="/signup">here</a></p> */}
          Not already a member? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  </div>
)}

export default Login;
