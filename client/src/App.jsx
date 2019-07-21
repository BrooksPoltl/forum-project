import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { LandingPage, LoginPage, TimeLinePage } from './pages/index';
const App = ()=>{
		return(
		<div>
      		<Switch>
				<Route exact path = '/' component = {LandingPage}/>
				<Route exact path = '/login' component = {LoginPage}/>
				<Route exact path = '/timeline' component = {TimeLinePage}/>
			</Switch>
    	</div>
		)
};

export default withRouter(App);
