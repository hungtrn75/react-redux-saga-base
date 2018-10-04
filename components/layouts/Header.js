import React from 'react';
import Link from 'next/link';
import ActiveLink from './../ActiveLink';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
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
                        <ActiveLink name='login' className=''>Login</ActiveLink>
                    </ul>
                </div>
            </nav>
        );
    }
}
