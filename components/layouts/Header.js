import React from 'react';
import Link from 'next/link';
import ActiveLink from './../ActiveLink';
import { reqLogoutAuth } from './../../modules/auth/actions';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'

class Header extends React.Component {
    onLogout = () => {
        this.props.logout();
        window.location.href = "/auth/login"
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

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: (router) => {
            dispatch(reqLogoutAuth(router));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
