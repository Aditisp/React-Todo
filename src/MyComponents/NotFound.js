import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';


export default class NotFound extends Component {
    render() {
        return (
            <div style={{position:'fixed', top:0, height: "100vh", width:"100vw", backgroundColor: 'white'}}>
                <h1>Page Not Found!</h1>
                
                <NavLink to="/Home">
                    <br></br>
              <h2> Click here to visit Home page</h2>
            </NavLink>

            </div>
        )
    }
}
