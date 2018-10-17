import React from 'react'
import {connect} from 'react-redux'
import Login from './../../components/auth/Login'
import initialize from './../../utils/initialize';
import { withRouter } from 'next/router'
import { reqLoginAuth } from './../../modules/auth/actions'

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
            <Login auth={this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
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
