import React from 'react';
import Link from 'next/link';
import ActiveLink from './../ActiveLink';
import { reqLogoutAuth, recLoginAuth } from './../../modules/auth/actions';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'
import { getCookie, setCookie, removeCookie } from './../../utils/cookie';
import Http from './../../utils/Http';
import jwt_decode from 'jwt-decode';
import store from './../../store';
import {Auth} from './../../constants/ApiRequest';

class Header extends React.Component {
    onLogout = () => {
        this.props.logout();
        localStorage.removeItem('refreshToken');
        window.location.href = "/auth/login"
    }

    componentDidMount() {
        if (getCookie('token') && !localStorage.refreshToken) {
            localStorage.setItem('refreshToken', Math.random().toString(36));
        }
        else if (getCookie('token') && localStorage.refreshToken) {
            let decoded = jwt_decode(getCookie('token'));
            let currentTime = Date.now()/1000;
            let timeOut = (parseFloat(decoded.exp) - parseFloat(currentTime))*1000;
            let timeRefresh = timeOut - 300000;
            if (parseFloat(decoded.exp) > parseFloat(currentTime) && timeOut >= timeRefresh) {
                if (this.requestTimeout) clearTimeout(this.requestTimeout);
                this.requestTimeout = setTimeout(() => {
                    (new Http()).get(Auth.REFRESH)
                        .then(res => {
                            setCookie('token', res.data.token)
                            localStorage.removeItem('refreshToken');
                        })
                        .catch(err => {})
                }, timeRefresh)
            } else if (timeOut <= 0) {
                removeCookie('token');
                localStorage.removeItem('refreshToken');
                this.props.setNullIsAuthenticated();
                window.location.href = '/auth/login';
            }
        }
    }

    componentWillUnMount() {
        if (this.requestTimeout) clearTimeout(this.requestTimeout);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ActiveLink name='home' className='navbar-brand'>ReduxSaga</ActiveLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <ActiveLink name='products' className='nav-link'>Products</ActiveLink>
                        </li>
                    </ul>
                    <ul className="form-inline my-2 my-lg-0">
                        <Link href='javascript:;'>
                            <a onClick={this.onLogout}>Logout</a>
                        </Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: (router) => {
            dispatch(reqLogoutAuth(router));
        },
        refresh: () => {
            dispatch(reqRefreshAuth());
        },
        setNullIsAuthenticated: () => {
            dispatch(recLoginAuth(null));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
