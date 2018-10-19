import React, {Component} from 'react';
import ActiveLink from './../ActiveLink'
import { withRouter } from 'next/router'
import { reqLoginAuth } from './../../modules/auth/actions'
import {connect} from "react-redux";
import Loading from './../Loading';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            success: '',
            errors: [],
            error: '',
            isLoading: false
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.auth.alert) {
            this.setState({
                errors: nextProps.auth.alert.errors,
                error: nextProps.auth.alert.error,
                isLoading: false
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.alert) {
            this.setState({
                success: this.props.auth.alert.success
            })
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const params = { email, password };
        this.props.auth.loginAuth(params, this.props.router)
        this.setState({
            isLoading: true
        })
    };

    render() {
        const {
            email,
            password,
            success,
            errors,
            error,
            isLoading
        } = this.state;

        const successMessage = <div className="p-2 mb-2 bg-success text-white">{success}</div>;
        const errorMessage = <div className="p-2 mb-2 bg-danger text-white">{error}</div>;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                {isLoading && 
                                    <Loading />
                                }
                                <div className="form-label-group">{ success ? successMessage : (error ? errorMessage : '') }</div>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            className={`form-control${
                                                errors && errors.email ? ' border border-danger' : ''
                                            }`}
                                            name="email"
                                            placeholder="Email address or Username"
                                            value={email}
                                            onChange={this.onChange}
                                            />
                                        {errors && errors.email &&
                                            <span className="form-field__required text-danger">{errors.email}</span>
                                        }
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            className={`form-control${
                                                errors && errors.password ? ' border border-danger' : ''
                                            }`}
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={this.onChange}
                                            />
                                        {errors && errors.password &&
                                            <span className="form-field__required text-danger">{errors.password}</span>
                                        }
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
