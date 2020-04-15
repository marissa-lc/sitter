import React from "react";
import { Button, Modal } from 'react-bootstrap';

function AddBio(props) {
  console.log("event props", props);

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
     <div className="card text-center">
        <div className="card-header">
          Add a Profile
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="name" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="age">Age</label>
              <input type="age" className="form-control" id="age" placeholder="Age" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="input">Who is this profile for?</label>
              <select id="input" className="form-control">
                <option>Child</option>
                <option>Pet</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bio">Tell us a little more...</label>
              <textarea className="form-control" id="bio" rows={3} defaultValue={""} />
              <button type="submit" className="btn btn-primary">Add a Photo</button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
   
      <div className="modal-footer">
        <button className="btn btn-primary" onClick={()=>props.onHide()}>Close</button>
      </div>


      </Modal>
  );
}

export default AddBio;