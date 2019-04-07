import React, { PureComponent, Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './NavigationMenu.sass';
import classNames from 'classnames';


class NavigationMenu extends PureComponent {
    render() {
        const {location} = this.props;
        return (
            <Fragment>
                <ul className="navi container">
                    <li className={classNames({ active:location.pathname === '/posts' })}><Link to="/posts">Истории и комментарии</Link></li>
                </ul>
            </Fragment>
        );
    }
};

export default withRouter(NavigationMenu);