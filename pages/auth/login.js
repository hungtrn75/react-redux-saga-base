import React from 'react'
import {connect} from 'react-redux'
import Login from './../../components/auth/Login'
import initialize from './../../utils/initialize';
import { withRouter } from 'next/router'
import { reqLoginAuth } from './../../modules/auth/actions'
import { alertsSelector } from './../../modules/alert/selectors';
import { authSelector } from './../../modules/auth/selectors';
import { Map } from 'immutable';

class LoginPage extends React.Component {

    static getInitialProps ({ctx}) {
        initialize(ctx);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.router.push('/');
        }
    }

    render () {
        return (
            <Login
                auth={this.props.auth}
                alert={this.props.alert}
                loginAuth={this.props.loginAuth}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: authSelector(state),
        alert: alertsSelector(state)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginAuth: (data, router) => {
            dispatch(reqLoginAuth(data, router));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
