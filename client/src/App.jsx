import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { LandingPage } from './pages/index';
const App = () =>{
  	return (
		<div>
      		<Switch>
				<Route exact path = '/' component = {LandingPage}/>
			</Switch>
    	</div>
    );
};

export default withRouter(App);
