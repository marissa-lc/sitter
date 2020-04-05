import React, { useState } from "react";
import API from "../pages/utils/API";
// import axios from "axios";
// import Footer from "../components/Footer";
// import ProjectList from "../components/ProjectList";

function Login() {
  const [formObject, setFormObject] = useState({
    userEmail: "",
    userPassword: ""
 })

 function saveInputs(event) {
   const keyName = event.target.name;
   const keyValue = event.target.value;
   setFormObject({ ...formObject, [keyName] : keyValue});
 }

function loginForm (event) {    
   event.preventDefault();
   if (!formObject.userEmail || !formObject.userPassword) {
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
       console.log('success');
       console.log(res);
     })
     .catch(err => {
       console.log('error');
       console.log(err);
     })
 }

return (
  <div className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Log in to Sitter</h2>
          <form className="login">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email-input" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password-input" placeholder="Password" />
            </div>
            <div style={{display: 'none'}} id="alert" className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
              <span className="sr-only">Error:</span> <span className="msg" />
            </div>          
            <button type="submit" className="btn btn-default">Login</button>
          </form>
          <br />
          {/* <p><a href="/">Home</a></p> */}
          <p>Not a member yet? Sign up <a href="/signup">here</a></p>
        </div>
      </div>
    </div>
  </div>
)}

export default Login;
