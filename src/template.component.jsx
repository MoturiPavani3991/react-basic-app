import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

class Main extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			loading: false,
		};
	};
	
	render() {
		return ( <section className="main">
			<div className="text-danger">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae tempora, adipisci nostrum molestiae necessitatibus. Deleniti ipsam repudiandae rerum provident itaque delectus dolore id magni, necessitatibus hic odio, qui harum similique.
			</div>
		</section> )

	}
}

export default Main;
