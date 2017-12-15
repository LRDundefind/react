import React from "react";
import Header from './components/header';
import Home from './components/Home/home';

export default class Hello extends React.Component{
	render() {
		return (
			<div>
				<Header/>
				<Home/>
			</div>
		);
	}
}