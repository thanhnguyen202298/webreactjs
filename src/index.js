import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch, Redirect } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Home from './view/Home'
import registerServiceWorker from './registerServiceWorker';

// const bhistory= ;

ReactDOM.render((
    <Router >
        <App>
            <Switch>
                <Route path='/' exact component={Home}>

                </Route>
            </Switch>
        </App>
    </Router>),
    document.getElementById('root'));
registerServiceWorker();
