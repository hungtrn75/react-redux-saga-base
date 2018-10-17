import React from 'react';
import ActiveLink from './../ActiveLink'
import { withRouter } from 'next/router'
import {connect} from "react-redux";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, confirm_password } = this.state;
        const params = {username, email, password, confirm_password};
        this.props.auth.registerAuth(params, this.props.router)
    };

    render() {
        const { username, email, password, confirm_password } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign Up</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            placeholder="Username"
                                            value={username}
                                            onChange={this.onChange}
                                            />
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email address"
                                            value={email}
                                            onChange={this.onChange}
                                            />
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={this.onChange}
                                            />
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            name="confirm_password"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            value={confirm_password}
                                            onChange={this.onChange}
                                            />
                                    </div>
                                    <hr className="my-4"/>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase">Sign Up</button>
                                    <div className="text-center">
                                        <span>
                                            Already have an account?
                                            <ActiveLink name='login'> Sign In</ActiveLink>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);
