import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import AuthenticatedUserView from './AuthenticatedUserView';
import UnauthenticatedUserView from './UnauthenticatedUserView';

import checkAuth from './helpers/checkAuth'

const App = (props)=>{
	const [auth, setAuth] = useState(false);
	useEffect(()=>{
		let checked = checkAuth();
		setAuth(checked);
	},[])
	if(auth){
		return <AuthenticatedUserView {...props}/>
	}
	else{
		return <UnauthenticatedUserView {...props} setAuth = {setAuth}/>
	}
};

export default withRouter(App);
