import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Topbar from './topbar/topbar.component.jsx'

import Main from './main/main.component.jsx'
import About from './about/about.component.jsx'

class RouterOutlet extends Component {
	render() {
		return ( <div>

			<div className="router-outlet">
				<Router>
					<Topbar/>
					<Route exact path="/" component={Main}/>
					<Route exact path="/main" component={Main}/>
					<Route exact path="/about" component={About}/>
					{/* <Redirect exact from="*" to={"/"}/> */}
				</Router>
			</div>

		</div> )

	}
}

export default RouterOutlet;
