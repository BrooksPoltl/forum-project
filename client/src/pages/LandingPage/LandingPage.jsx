import React from 'react';

import SignupForm from '../../components/LandingPage/signUpForm';
import InformationGuide from '../../components/LandingPage/informationGuide'
const LandingPage = () =>{
    return(
        <div className = 'wrapper' style = {{display: "flex", minHeight: "100vh"}}>
            <InformationGuide />
            <SignupForm />
        </div>
    )
};

export default LandingPage