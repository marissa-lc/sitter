import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Login from "./pages/Login";
import Sitter from "./pages/Sitter";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/sitter" component={Sitter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
