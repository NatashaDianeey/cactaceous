import React, { Component } from 'react';
import '../../css/general/footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="app__footer footer">
                <div className="footer__container">
                    <div className="footer__legals">
                        © 2019 Cactaceous
                    </div>
                    <div className="footer__menu">
                        <ul>
                            <li>Privacy policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;


