import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Index from '../pages/index.jsx';
import Video from '../pages/video';
import Test from '../pages/test';
import Monitor from '../pages/monitor';
import ClassDemo from '../pages/classDemo';
import HooksDemo from '../pages/hooksDemo';
import Contrast from '../pages/contrast';

import { Route, Switch, withRouter } from 'react-router-dom';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
		location: PropTypes.object.isRequired
	}
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.onRouteChanged();
		}
	}
	onRouteChanged() {
		let that = this;
		let menu = document.querySelector('#login-view');
		if (this.props.location.pathname === '/login') {
			menu.style.display = 'none';
		} else {
			menu.style.display = 'block';
		}
	}
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Index} />
				<Route path="/video" component={Video} />
				<Route path="/test" component={Test}/>
				<Route path="/monitor" component={Monitor}/>
				<Route path="/classdemo" component={ClassDemo}/>
				<Route path="/hooksdemo" component={HooksDemo}/>
				<Route path="/contrast" component={Contrast}/>
			</Switch>
		);
	}
}

export default withRouter(Main);
