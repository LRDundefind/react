import React from "react";
import './docs.less';

export default class Hello extends React.Component{
	constructor(props) {
        super(props);
    }
	
	render() {
		return (
			<div className="docs-components clearfix">
				Hello World
			</div>
		);
	}
}