import React from "react";
import { Link } from 'react-router';
import Home from './Home/home.js';
import './header.less';

export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }
	render() {
		return (
			<div>
				<div className="header-components clearfix pos-f top">
					<header>
						<Link to="/"> 
							<img src="/static/images/logo.png" width="50" className="logo f-l" alt=""/>
							<h1 className="caption f-l"> Hello music</h1>
						</Link>
						<nav className="nav clearfix">
							<Link to="/docs" activeClassName="active">Docs</Link>
							<Link to="/tutorial" activeClassName="active">Tutorial</Link>
							<a>Community</a>
							<a>Blog</a>
							<span className="f-r pos-r">
								<input type="text" placeholder="Search" />
							</span>
						</nav>
						
					</header>
					
				</div>
				
				{this.props.children}
			</div>

		);
	}

}
