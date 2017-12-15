import React from "react";
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Docs from './components/Docs/docs.js';
import Home from './components/Home/home.js';
import Tutorial from './components/Tutorial/tutorial.js'

render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/docs" component={Docs}/>
            <Route path="/tutorial" component={Tutorial}/>
        </Route>
    </Router>
), document.getElementById('app'));