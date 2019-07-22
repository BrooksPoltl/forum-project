import React from 'react';
import { Route, Switch } from 'react-router';
import { LandingPage, LoginPage } from './pages/index';


const UnauthenticatedUserView = (props) =>{
        return(
            <div>
                <Switch>
                        <Route exact path = '/' component = {LandingPage}/>
                        <Route exact path = '/login' component = {()=><LoginPage {...props}/>}/>
                </Switch>
            </div>
        )
}

export default UnauthenticatedUserView;