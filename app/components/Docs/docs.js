import React from "react";
import { Link } from 'react-router';
import '../menu.less';
import '../main.less';
import './docs.less';
import Menu from '../Menu/menu';

export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }
	
	render() {
		return (
			<div className="docs-components clearfix">
				<div className="main-components">
					<div style={{width:"80%"}}>
					<div className="title">Hello World</div>
					<div className="main-docs">
						<div className="introduce">
						The easiest way to get started with React is to use this Hello World example code on CodePen. 
						You don’t need to install anything; you can just open it in another tab and follow along as we go through examples. 
						If you’d rather use a local development environment, check out the Installation page.
						</div>
					</div>
					{this.props.children}
					</div>
				</div>
				<div className="menu-components pos-f">
					<div className="slideBar">
						<Link to="/docs/try-react" activeClassName="">try-react</Link>
						<Link to="/docs/add-react-to-a-new-app" activeClassName="">add-react-to-a-new-app</Link>
						<Link to="/docs/add-react-to-an-existing-app" activeClassName="">add-react-to-an-existing-app</Link>
						<Link to="/docs/cdn-links" activeClassName="">cdn-links</Link>
					</div>
				</div>
			</div>
		);
	}
}
