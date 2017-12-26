import React from "react";
import { Link } from 'react-router';
import '../main.less';
import './docs.less';

export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }
	
	render() {
		return (

			<div style={{width:"80%"}} className="index-components">
			
				<div className="title">Hello World</div>
				<div className="main-docs">
					<div className="introduce">
					The easiest way to get started with React is to use this Hello World example code on CodePen. 
					You don’t need to install anything; you can just open it in another tab and follow along as we go through examples. 
					If you’d rather use a local development environment, check out the Installation page.
					</div>
				</div>
			</div>
		);
	}
}
