import React from 'react';
import InformationGuide from '../../components/LandingPage/informationGuide';
import LoginForm from '../../components/LoginPage/LoginForm';

const LoginPage = (props) =>{
    return(
        <div style = {{display: "flex", minHeight: "100vh"}}>
            <InformationGuide />
            <LoginForm {...props}/>
        </div>
    )
}

export default LoginPage