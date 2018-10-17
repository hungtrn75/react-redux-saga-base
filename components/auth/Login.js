import React from 'react';
import ActiveLink from './../ActiveLink'
import { withRouter } from 'next/router'
import { reqLoginAuth } from './../../modules/auth/actions'
import {connect} from "react-redux";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const params = { email, password };
        this.props.auth.loginAuth(params, this.props.router)
    };

    render() {
      const { email, password } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email address or Username"
                                            value={email}
                                            onChange={this.onChange}
                                            />
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={this.onChange}
                                            />
                                    </div>
                                    <hr className="my-4"/>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    <div className="text-center">
                                        <span>
                                            Don't have an account? 
                                            <ActiveLink name='register'>Sign Up</ActiveLink>
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

export default withRouter(Login);
