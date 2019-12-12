import React, { Component } from 'react';
import { Redirect, Route} from 'react-router-dom';

import Attendance from './Attendance';

class Home extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        console.log(token);
        let loggedIn = true;
        if (token === null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn
        }
    }

    render() {


        if (this.state.loggedIn === false) {
            return <Redirect to="/login" />;
        }
        return (
            <Attendance />
           
           
        );
    }
   
    
}

export default Home;