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
