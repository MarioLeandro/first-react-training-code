import React from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => (
        <BrowserRouter>
        <Switch>
        <Route component= {Home} path="/" exact/>
        </Switch>
        </BrowserRouter>
    );

export default Routes;