import React from "react";
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main';
import Docs from '../components/Docs/docs';
import Home from '../components/Home/home';
import Tutorial from '../components/Tutorial/tutorial'

const routeConfig = [
	{ path: '/',
	    component: Main,
	    indexRoute: { component: Home },
	    childRoutes: [
		    { path: 'docs', component: Docs },
		    { path: 'tutorial',component: Tutorial}
	    ]
	}
]