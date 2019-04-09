import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './style.sass';

import Header from 'components/Header';
import Footer from 'components/Footer';

import routes from './routes';
import store from './store';

class Container extends PureComponent {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Fragment>
                        <Header />
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route} />)}
                        </Switch>
                    </Fragment>
                </BrowserRouter>
                <Footer />
            </Fragment>
        );
    }
};

ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById('container'));