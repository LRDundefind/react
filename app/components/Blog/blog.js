import React from "react";
import './blog.less';
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
			<div className="blog-components clearfix">
				<div className="main-components">
					<div style={{width:"80%"}}>
						<div className="title">Behind the Scenes: Improving the Repository Infrastructure</div>
						<h5>
							As we worked on React 16, we revamped the folder structure and much of the build tooling in the React repository. 
							Among other things, we introduced projects such as Rollup, Prettier, and Google Closure Compiler into our workflow. 
							People often ask us questions about how we use those tools. In this post, we would like to share some of the changes 
							that we’ve made to our build and test infrastructure in 2017, and what motivated them.
						</h5>
						<p>While these changes helped us make React better, they don’t affect most React users directly. 
						However, we hope that blogging about them might help other library authors solve similar problems. 
						Our contributors might also find these notes helpful!</p>
						<div className="item">
							<h3>Formatting Code with Prettier</h3>
							
							<p>React was one of the first large repositories to fully embrace opinionated automatic code formatting with Prettier. 
							Our current Prettier setup consists of:</p>

							<ul>
								<li>. A local yarn prettier script that uses the Prettier Node API to format files in place. 
								We typically run it before committing changes. 
								It is fast because it only checks the files changed since diverging from remote master.</li>
								<br/>
								<li>. A script that runs Prettier as part of our continuous integration checks. It won’t attempt to overwrite the files, 
								but instead will fail the build if any file differs from the Prettier output for that file. 
								This ensures that we can’t merge a pull request unless it has been fully formatted.</li>
							</ul>

							<p>Some team members have also set up the editor integrations. Our experience with Prettier has been fantastic, 
							and we recommend it to any team that writes JavaScript.</p>
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