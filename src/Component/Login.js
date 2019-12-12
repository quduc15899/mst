import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        if (this.state.username === "admin" && this.state.password === "admin") {
            localStorage.setItem("token","128379182akushdkaushdkja");
            this.setState({
                isLogged: true
            })
        }
    }
    render() {
        if (this.state.isLogged === true) {
            return <Redirect to="/" />;
            
            
        }
        
        return (

            <div>

                {/* Begin page */}
                <div className="accountbg" />
                <div className="wrapper-page">
                    <div className="card card-pages shadow-none">
                        <div className="card-body">

                            <h5 className="font-18 text-center">Sign in to continue to MST</h5>
                            <form className="form-horizontal m-t-30">
                                <div className="form-group">
                                    <div className="col-12">
                                        <label>Username</label>
                                        <input onChange={(event) => this.isChange(event)} className="form-control" name="username" type="text" required placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-12">
                                        <label>Password</label>
                                        <input onChange={(event) => this.isChange(event)} className="form-control" name="password" type="password" required placeholder="Password" />
                                    </div>
                                </div>

                                <div className="form-group text-center m-t-20">
                                    <div className="col-12">
                                        <input onClick={(event) => this.submitForm(event)} type="submit" value="Login" className="btn btn-primary" />                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Login;