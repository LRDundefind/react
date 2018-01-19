import React from "react";
import './menu.less';


var arr = [],
	active = false;

export default class accordion extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {index: 0};
	    // 特别注意这一行语句
	    //this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return (<div className="accordion" data={arr}>
					{this.props.data.map((el, index)=> {
						return (
							<div className="div" key={index}>
								<div className="title" onClick={this.handleClick.bind(null,index)}>{el.title}</div>
								<ul className={"content "+(this.props.active ? "full" : "")} >
									{el.content.map((option, index) => {
											return (<li key={index}>{option}</li>)
										}
									)}
								</ul>
							</div>
						)
					})}
		</div>)
	}

	handleClick(index , ev){
		this.setState({
			index : index
		})
	}

}
