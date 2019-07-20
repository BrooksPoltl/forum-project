import React from 'react';
import InformationGuide from '../../components/LandingPage/informationGuide';
import LoginForm from '../../components/LoginPage/LoginForm';

const LoginPage = () =>{
    return(
        <div style = {{display: "flex", minHeight: "100vh"}}>
            <InformationGuide />
            <LoginForm />
        </div>
    )
}

export default LoginPage