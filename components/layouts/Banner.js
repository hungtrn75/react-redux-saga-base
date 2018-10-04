import React from 'react';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">E-COMMERCE CART</h1>
                </div>
            </section>
        );
    }
}
