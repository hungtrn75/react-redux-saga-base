import React from 'react'
import {connect} from 'react-redux'
import Register from './../../components/auth/Register'
import initialize from './../../utils/initialize';
import { withRouter } from 'next/router'

class RegisterPage extends React.Component {

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
            <Register />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
    }
};

export default withRouter(connect(mapStateToProps)(RegisterPage));
