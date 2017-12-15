import React from "react";
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Header from './components/header';
import Docs from './components/Docs/docs';
import Home from './components/Home/home';
import Tutorial from './components/Tutorial/tutorial'
import Root from './root'




render((
	<div>
		<Router history={hashHistory}>
	        <Route path="/" component={Header}>
			    <Route path="/docs" component={Home}/>
			    <Route path="/tutorial" component={Tutorial}/>
		    </Route>
	  
	    </Router>
	</div>
	
), document.getElementById('app'))

