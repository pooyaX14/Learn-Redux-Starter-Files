import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
	render(){
		// console.log("this.props.children inside Main", this.props)
		return(
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
        {React.cloneElement(this.props.children, this.props)}	
			</div>
		)
	}
}

export default Main;