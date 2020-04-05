import React, {useEffect, useState} from "react";
import Schedule from "../components/Schedule";
// import Notes from "../components/Notes";
import Emergency from "../components/Emergency";
import axios from "axios";

function Sitter() {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    axios.get('/api/checkToken')
      .then(res => {
        if (res.status === 200) {
          setLoading(true);
        } else {
          logout();
        }
      })
      .catch(err => {
        console.error(err);
        logout();
      });
  });


  function logout() {
      axios
        .get("/api/logout")
        .then(res => {
          window.location = '/';
        })
        .catch(err => {
          console.log(err);
        })
  }

return (
  // This is what we show when the user is not authenticated
  <div style={{display: loading ? 'block' : 'none'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>SITTER PAGE<span className="member-name" /></h2>
          <div>THIS IS WHERE THE PROFILE WILL GO</div>
          <button onClick={logout}>Logout</button>
          <Schedule></Schedule>
          <Emergency></Emergency>
        </div>
      </div>
    </div>
  </div>
  // We need to show something else if the user is authenticated
)}

export default Sitter;
