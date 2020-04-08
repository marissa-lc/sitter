import React, { Component } from "react";
import {Textfield, Grid, Cell, FABButton, Icon } from 'react-mdl';

class AddBio extends Component {
    render() {
        return(
    <div>
        <Grid className="profileForm">
          <Cell col={6}>
            <h2>
                Add A Profile
            </h2>

            <hr/>

            <div className="form">
            <Textfield
            onChange={() => {}}
            label="Name..."
            style={{width: '200px'}}>
             </Textfield>
             </div>
    
            <div>
            <Textfield
            onChange={() => {}}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            label="Age..."
            style={{width: '200px'}}>
            </Textfield>
            </div>

            <div>
            <Textfield
            onChange={() => {}}
            label="Tell us more..."
            style={{width: '600px'}}>
             </Textfield>
             </div>

            <div>
             <FABButton colored ripple>
            <Icon name="add" />
            </FABButton>
            </div>

          </Cell>
        </Grid>
      </div>        

 
        )
    }
}

export default AddBio;