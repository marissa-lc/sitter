import React, { Component } from "react";
import { Button, TextField } from '@material-ui/core';

class Schedule extends Component {
  render() {
    return(function Schedule(props) {
  console.log("formbtn props", props);
  return (
    <Button type="submit" variant="contained" color="primary" {...props}>
    </Button>
  );
  }
    )}
}

export default Schedule;