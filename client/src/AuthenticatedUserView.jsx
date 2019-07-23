import React from 'react';
import { Route, Switch } from 'react-router';
import {  TimeLinePage } from './pages/index';



const AuthenticatedUserView = () =>{
        return(
            <div>
                <Switch>
                        <Route exact path = '/' component = {TimeLinePage}/>
                </Switch>
            </div>
        )
}

export default AuthenticatedUserView;