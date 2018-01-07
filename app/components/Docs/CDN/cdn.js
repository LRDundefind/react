import React from "react";
import '../../main.less';
import './cdn.less';


export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }
	
	render() {
		return (
			
			<div style={{width:"80%"}} className="try-components">
				<div className="title">CDN Links</div>
				<div className="main-docs">
					<div className="introduce">
					The UMD builds of React and ReactDOM are available over a CDN.
					</div>
				</div>
			</div>
			
		);
	}
}
