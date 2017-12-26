import React from "react";
import '../../main.less';
import './existingApp.less';


export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }
	
	render() {
		return (
			
			<div style={{width:"80%"}} className="existingApp-components">
				<div className="title">Add React to an Existing Application</div>
				<div className="main-docs">
					<div className="introduce">
					You don’t need to rewrite your app to start using React.
					</div>
				</div>
			</div>
			
		);
	}
}
