import React from "react";
import '../menu.less';
import '../main.less';
import './docs.less';
import Menu from '../Menu/menu';
var arr = [
	{
		title : "title",
		content : [
			"menu1",
			"menu2",
			"menu3",
			"menu4"
		]
	},
	{
		title : "title1",
		content : [
			"menu1",
			"menu2",
			"menu3",
			"menu4"
		]
	},
	{
		title : "title2",
		content : [
			"menu1",
			"menu2",
			"menu3",
			"menu4"
		]
	},
	{
		title : "title2",
		content : [
			"menu1",
			"menu2",
			"menu3",
			"menu4"
		]
	}
];
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
					</div>
				</div>
				<div className="menu-components pos-f">
					<div className="slideBar">
						<Menu data={arr}/>
					</div>
				</div>
			</div>
		);
	}
}
