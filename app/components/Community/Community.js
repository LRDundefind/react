import React from "react";
import './Community.less';
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
			<div className="community-components clearfix">
				<div className="main-components">
					<div style={{width:"80%"}}>
						<div className="title">Where To Get Support</div>
						<h5>React is worked on full-time by Facebook’s product infrastructure and Instagram’s user interface engineering teams. 
						They’re often around and available for questions.</h5>
						<div className="item">
							<h3>Stack Overflow</h3>
							<p>Many members of the community use Stack Overflow to ask questions. 
							Read through the existing questions tagged with reactjs or ask your own!</p>
						</div>
						<div className="item">
							<h3>Discussion Forum</h3>
							<p>For longer-form conversations about React, we’ve set up a discussion forum at discuss.reactjs.org. 
							This forum is a great place for discussion about best practices and application architecture as well as the future of React. 
							If you have an answerable code-level question, please post it to Stack Overflow instead.</p>

							<p>In the forum there’s also a category for job posts and a category for discussion of our weekly meeting notes.</p>
						</div>
						<div className="item">
							<h3>React Community on Hashnode</h3>
							<p>Hashnode’s React node is a great place to stay up-to-date with React discussion, news and stories.</p>
						</div>
						<div className="item">
							<h3>Reactiflux Chat</h3>
							<p>If you need an answer right away, check out the Reactiflux Discord community. 
							There are usually a number of React experts there who can help out or point you to somewhere you might want to look.</p>
						</div>
						<div className="item">
							<h3>Freenode IRC</h3>
							<p>Some developers also hang out in #reactjs on Freenode.</p>
							<div className="blackquote">
								<p><strong>Note:</strong></p>

								<p>Our IRC channel is called #reactjs. It is not called #react or #reactos.</p>

								<p>The #reactos channel belongs to an unrelated ReactOS operating system project. The 
								#react channel is not affiliated with us either. To discuss the React JavaScript library on 
								its official IRC channel, please make sure that you post in #reactjs.</p>
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