import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./pages/Login";
<<<<<<< HEAD
// import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import AddBio from "./components/addBio";
import Schedule from "./components/Schedule";
import Contact from './components/contact';
=======
import Sitter from "./pages/Sitter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
>>>>>>> 70341ed3a7e5cdd38482a57a4b982699ac80ca18

function App() {
  return (
    <Router>
      <div>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/addBio" component={AddBio} />
          <Route exact path="/Schedule" component={Schedule}/>
          <Route exact path="/contact" component={Contact}/>
=======
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/sitter" component={Sitter} />
>>>>>>> 70341ed3a7e5cdd38482a57a4b982699ac80ca18
        </Switch>
      </div>
    </Router>
  );
}

export default App;