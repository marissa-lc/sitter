import React from "react";
import { Button, TextField } from '@material-ui/core';

export function Schedule(props) {
  console.log("formbtn props", props);
  return (
    <Button type="submit" variant="contained" color="primary" {...props}>
    </Button>
  );
}
