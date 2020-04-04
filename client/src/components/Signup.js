import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ProjectList from "../components/ProjectList";

function Signup() {
  // const [formObject, setFormObject] = useState({
  //   fullName: "",
  //   email: "",
  //   message: ""
  // })

return (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Sign Up for Sitter</h2>
          <form className="signup">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email-input" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password-input" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password Confirm</label>
              <input type="password" className="form-control" id="password-confirm-input" placeholder="Password" />
            </div>
            <div style={{display: 'none'}} id="alert" className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
              <span className="sr-only">Error:</span> <span className="msg" />
            </div>
            <button type="submit" className="btn btn-default">Sign Up</button>
          </form>
          <br />
          {/* <p><a href="/">Home</a></p> */}
          <p>Already signed up? Log in <a href="/login">here</a></p>
        </div>
      </div>
    </div>
  </div>
)}

export default Signup;