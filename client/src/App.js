import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./pages/Login";
import Sitter from "./pages/Sitter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/sitter" component={Sitter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;