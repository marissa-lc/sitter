import React, { Component } from "react";

class AddBio extends Component {
    render() {
        return(
            <div>
               <form>
                   <input type="text" id="childName"></input>
                   <input type="text" id="childAge"></input>
                   <input type="text" id="childBio"></input>
               </form>
            </div>
        )
    }
}

export default AddBio;