import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small blue">
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/bootstrap-tutorial/"> Framgia INC</a>
                </div>
            </footer>
        );
    }
}
