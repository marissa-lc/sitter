import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import AddBio from "./components/addBio";
import Schedule from "./components/Schedule";
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/addBio" component={AddBio} />
          <Route exact path="/Schedule" component={Schedule}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;