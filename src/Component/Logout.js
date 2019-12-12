import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token");
        const token = localStorage.getItem("token");

        let login = false;
        if(token === null){
            login = true;
        }
        this.state = {
            login
        }
    }
    render() {
        if(this.state.login === true){
            return <Redirect to="/login"/>
        }
        return (
            <div>
                
            </div>
        );
    }
}

export default Logout;