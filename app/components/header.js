import React from "react";
import { Link } from 'react-router';
import './header.less';

export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="header-components clearfix pos-f top">
				<header>
					<img src="/static/images/logo.png" width="50" className="logo f-l" alt=""/>
					<h1 className="caption f-l"> Hello music</h1>

                	
					<nav className="nav clearfix">
						<a>Docs</a>
						<a>Tutorial</a>
						<a>Community</a>
						<a>Blog</a>
						<span className="f-r pos-r">
							<input type="text" placeholder="Search" />
						</span>
					</nav>
				</header>
			</div>
		);
	}

}
