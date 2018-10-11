import React from 'react'
import {connect} from 'react-redux'
import Login from './../../components/auth/Login'
import initialize from './../../utils/initialize';
import { withRouter } from 'next/router'

class LoginPage extends React.Component {

    static getInitialProps ({ctx}) {
        initialize(ctx);
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.router.push('/');
        }
    }

    render () {
        return (
            <Login />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
    }
};

export default withRouter(connect(mapStateToProps)(LoginPage));
