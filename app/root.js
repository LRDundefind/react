import React from "react";
import Main from './components/main';
import Home from './components/Home/home';

export default class Hello extends React.Component{
	render() {
		return (
			<div>
				<Header/>
				<Main/>
			</div>
		);
	}
}