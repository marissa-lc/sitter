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
            <div class="card text-center">
                  <div class="card-header">
                    Add a Profile
                  </div>
          
                  <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="name">Name</label>
                          <input type="name" class="form-control" id="name" placeholder="Name"/>
                        </div>
                       
                        <div class="form-group col-md-6">
                          <label for="age">Age</label>
                          <input type="age" class="form-control" id="age" placeholder="Age"/>
                        </div>
          
                        <div class="form-group col-md-6">
                          <label for="input">Who is this profile for?</label>
                          <select id="input" class="form-control">
                                  <option>Child</option>
                                  <option>Pet</option>
                          </select>
                          </div>
          
                        <div class="form-group">
                          <label for="bio">Tell us a little more...</label>
                          <textarea class="form-control" id="bio" rows="3"></textarea>
                        </div>
                        
                        </div>
                      {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                  </form>
              </div>
   
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default AddBio;