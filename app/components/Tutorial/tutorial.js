import React from "react";
import './tutorial.less';

export default class Hello extends React.Component{

	constructor(props) {
        super(props);
    }
	render() {
		return (
			<div className="tutorial-components clearfix">
				Hello tutorial
			</div>
		);
	}
}