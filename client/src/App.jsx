import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { LandingPage, LoginPage } from './pages/index';
const App = ()=>{
		return(
		<div>
      		<Switch>
				<Route exact path = '/' component = {LandingPage}/>
				<Route exact path = '/login' component = {LoginPage}/>
			</Switch>
    	</div>
		)
};

export default withRouter(App);
