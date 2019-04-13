import React from 'react';
import './Header.sass';

import Logo from 'components/Logo';
import NavigationMenu from 'components/NavigationMenu';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-block container">
                    <Logo />
                    <NavigationMenu />
                </div>
            </header>
        );
    }
};