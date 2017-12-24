import React from "react";
import './tutorial.less';
import '../main.less'
import '../menu.less';
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
			<div className="tutorial-components clearfix">
				<div className="main-components">
					<div style={{width:"80%"}}>
						<div className="title">Tutorial: Intro To React</div>
						<h2 className="before-we-start">Before We Start</h2>
						<h3 className="What-We’re-Building">What We’re Building</h3>
						<p>Today, we’re going to build an interactive tic-tac-toe game.</p>
						<p>If you like, you can check out the final result here: Final Result. 
						Don’t worry if the code doesn’t make sense to you yet, or if it uses an unfamiliar syntax. 
						We will be learning how to build this game step by step throughout this tutorial.</p>
						<p>Try playing the game. You can also click on a button in the move list to go “back in time” and
						see what the board looked like just after that move was made.</p>
						<p>Once you get a little familiar with the game, feel free to close that tab, 
						as we’ll start from a simpler template in the next sections.</p>

						<h3>Prerequisites</h3>
						<p>We’ll assume some familiarity with HTML and JavaScript, but you should be able to follow along 
						even if you haven’t used them before.</p>
						<p>If you need a refresher on JavaScript, we recommend reading this guide. Note that we’re also 
						using some features from ES6, a recent version of JavaScript. In this tutorial, we’re using arrow functions, 
						classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to.</p>

						<h3>How to Follow Along</h3>
						<p>There are two ways to complete this tutorial: you could either write the code right in the browser, 
						or you could set up a local development environment on your machine. You can choose either option depending 
						on what you feel comfortable with.</p>
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