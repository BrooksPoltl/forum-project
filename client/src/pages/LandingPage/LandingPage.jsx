import React from 'react';

import SignupForm from '../../components/LandingPage/signUpForm'

const LandingPage = () =>{
    return(
        <div className = 'wrapper' style = {{display: "flex"}}>
            <div style = {{background: "blue",width : "50%"}}>
                <h1>TEXT HERE</h1>
            </div>
            <SignupForm />
        </div>
    )
};

export default LandingPage