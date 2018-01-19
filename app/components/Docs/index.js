import React from "react";
import { Link } from 'react-router';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/styles/hljs';
import '../main.less';
import './docs.less';
const codeString = "ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById('root'));";
	
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

					<p>The smallest React example looks like this:</p>

					<SyntaxHighlighter language='javascript' style={agate}>
						{codeString}
						
					</SyntaxHighlighter>
				</div>
			</div>
		);
	}
}
