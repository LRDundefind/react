import React from "react";
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './components/main';
import Docs from './components/Docs/docs';
import Index from './components/Docs/index';
import Try from './components/Docs/try/try';
import NewApp from './components/Docs/newApp/newApp';
import ExistingApp from './components/Docs/existingApp/existingApp';
import CdnLinks from './components/Docs/cdnLinks/cdnLinks';
import Home from './components/Home/home';
import Tutorial from './components/Tutorial/tutorial';
import Community from './components/Community/community';
import Blog from './components/Blog/blog'

const routeConfig = [
	{ path: '/',
	    component: Main,
	    indexRoute: { component: Home },
	    childRoutes: [
		    { path: '/docs', 
		    	component: Docs,
		    	indexRoute: { component: Index },
		    	childRoutes: [
		    		{path: '/docs/try-react', component: Try},
		    		{path: '/docs/add-react-to-a-new-app', component: NewApp},
		    		{path: '/docs/Add-React-to-an-Existing-App', component: ExistingApp},
		    		{path: '/docs/cdn-links', component: CdnLinks},
		    	]
		    },
		    { path: '/tutorial',component: Tutorial},
		    { path: '/community',component: Community},
		    { path: '/blog',component: Blog},
	    ]
	}
]
render(
		<Router routes={routeConfig} history={hashHistory}/>
	
, document.getElementById('app'))

