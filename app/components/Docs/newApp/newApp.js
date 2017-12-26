import React from "react";
import '../../main.less';
import './newApp.less';


export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }
	
	render() {
		return (
			
			<div style={{width:"80%"}} className="newApp-components">
				<div className="title">Add React to a New Application</div>
				<div className="main-docs">
					<div className="introduce">
					The easiest way to get started on a new React project is by using a starter kit.
					</div>
				</div>
			</div>
			
		);
	}
}
