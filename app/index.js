import React from "react";
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Header from './components/header';
import Docs from './components/Docs/docs';
import Home from './components/Home/home';
import Tutorial from './components/Tutorial/tutorial'
import Root from './root'

render(
	<Root/>,
	document.getElementById('app')
)

render((
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <Route path="/docs" component={Docs}/>
            <Route path="/tutorial" component={Tutorial}/>
        </Route>
    </Router>
), document.getElementById('app'));