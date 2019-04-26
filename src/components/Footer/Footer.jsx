import React, { PureComponent } from 'react';
import './Footer.sass';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <div className="footer-block container">
                    <p>{(new Date().getFullYear())}</p>
                </div>
            </footer>
        );
    }
};