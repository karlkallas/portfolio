import React from 'react';
import {Router, Route, HashRouter } from 'react-router-dom';
import Home from './containers/Home';
import App from './containers/App';
import About from './containers/About';

export default (
    <HashRouter>
        <Route path="/" component={App}>
            <Route exact path="/" component={Home}/>
        </Route>
    </HashRouter>
);
