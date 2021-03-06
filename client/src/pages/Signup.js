import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Signup() {
  const [formObject, setFormObject] = useState({
     userEmail: "",
     userPassword: "",
     userPasswordConfirm: "",
     errorMessage: "Please enter correct information",
     displayError: false
  })

  function saveInputs(event) {
    const keyName = event.target.name;
    const keyValue = event.target.value;

    setFormObject({ ...formObject, [keyName] : keyValue, displayError: false});
  }


 function signUpForm (event) {    
    event.preventDefault();

    if (!formObject.userEmail || !formObject.userPassword || (formObject.userPassword !== formObject.userPasswordConfirm)) {
      setFormObject({ ...formObject, displayError: true});
      return;
    }

    axios
      .post("/api/signup", {
      email: formObject.userEmail,
      password: formObject.userPassword
    })
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
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h3>Sign Up for Sitter</h3>
          <form className="signup">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input name="userEmail" onChange={saveInputs} type="email" className="form-control" id="email-input" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input name="userPassword" onChange={saveInputs} type="password" className="form-control" id="password-input" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password Confirm</label>
              <input name="userPasswordConfirm" onChange={saveInputs} type="password" className="form-control" id="password-confirm-input" placeholder="Password" />
            </div>
            <div style={{display: formObject.displayError ? 'block' : 'none'}} id="alert" className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
              <span className="sr-only">Error:</span> <span className="msg">{formObject.errorMessage}</span>
            </div>
            {/* <button onClick={signUpForm} type="submit" className="btn btn-default">Sign Up</button> */}
            <Button color="inherit" onClick={signUpForm} type="submit">Sign Up</Button>
          </form>
          <br />
          {/* <p><a href="/">Home</a></p> */}
          {/* <p>Already signed up? Log in <a href="/login">here</a></p> */}
          Already signed up?  <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  </div>
)}

export default Signup;
