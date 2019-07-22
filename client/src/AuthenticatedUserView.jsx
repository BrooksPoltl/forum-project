import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { LandingPage, LoginPage, TimeLinePage } from './pages/index';



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