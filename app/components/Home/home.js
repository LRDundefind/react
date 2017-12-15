import React from "react";
import { Link } from 'react-router';
import './home.less';

export default class Hello extends React.Component{

	constructor(props) {
        super(props);
    }
	render() {
		return (
			<div className="home-components clearfix">
				<div className="home-header">
					<h1>React</h1>
					<p>A JavaScript library for building user interfaces</p>
					<div className="btnGroup">
						<a className="startBtn">Get Start</a>
						<a className="tutorialBtn">Take the Tutorial > </a>
					</div>
				</div>
				<ul className="home-body">
					<li>
						<h2>Declarative</h2>
						<p>React makes it painless to create interactive UIs. Design simple views for each state in your 
						application, and React will efficiently update and render just the right components when your 
						data changes.Declarative views </p>
						<p>make your code more predictable and easier to debug.</p>
					</li>
					<li>
						<h2>Component-Based</h2>
						<p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
						<p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data 
						through your app and keep state out of the DOM.</p>
					</li>
					<li>
						<h2>Learn Once, Write Anywhere</h2>
						<p>We don’t make assumptions about the rest of your technology stack, so you can develop new features
						in React without rewriting existing code.</p>
						<p>React can also render on the server using Node and power mobile apps using React Native.</p>
					</li>
				</ul>
			</div>

		);
	}
}