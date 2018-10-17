import React from 'react'
import {connect} from 'react-redux'
import Register from './../../components/auth/Register'
import initialize from './../../utils/initialize';
import { withRouter } from 'next/router'
import { reqRegisterAuth } from './../../modules/auth/actions'

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
            <Register auth={this.props}/>
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
        registerAuth: (data, router) => {
            dispatch(reqRegisterAuth(data, router));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
