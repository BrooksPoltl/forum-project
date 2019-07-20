import React, { useState, useEffect, useCallback, useRef } from 'react';


import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './styling/SignupForm.styling.css'


const SignupForm = () =>{
    const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword:""});
    const [missing,] = useState({username: false, email: false, password: false, confirmPassword: false}); 
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const didMountRef = useRef(false);

    useEffect(()=>{
        const checkMissing = () =>{
            if(didMountRef.current){
                user.username === ""? missing.username = true: missing.username = false;
                user.email === ""? missing.email = true: missing.email = false;
                user.password === ""? missing.password = true: missing.password = false;
                user.confirmPassword === ""?missing.confirmPassword = true:missing.confirmPassword = false;
                forceUpdate()
            }
            else{
                didMountRef.current = true;
            }
        }
        
        checkMissing()
        
    },[user, forceUpdate, missing, didMountRef])
   

    const handleChange = (event) =>{
 
        const value = event.target.value;
        setUser({...user, [event.target.name]: value});
    };

    return (
        <div className = 'form'>
            <Typography>Sign up to join symposium</Typography>
            <form style = {{display: "flex", flexDirection: "column"}}>
                <TextField
                    required = {true} 
                    label = "username"
                    value = {user.username}
                    name = "username"
                    onChange = {handleChange}
                    error = {missing.username}
                />
                <TextField
                    required = {true}
                    label = "email"
                    value = {user.email}
                    name = "email"
                    onChange = {handleChange}
                    error = {missing.email}
                />
                <TextField
                    required = {true}
                    label = "password"
                    value = {user.password}
                    name = "password"
                    type = "password"
                    onChange = {handleChange}
                    error = {missing.password}
                />
                <TextField 
                    required = {true} 
                    label = "confirm password"
                    value = {user.confirmPassword}
                    name = "confirmPassword"
                    type = "password"
                    onChange = {handleChange}
                    error = {missing.confirmPassword}
                />
                <Button  color = "red">Sign Up</Button>
                <Button  >Login</Button>
            </form>
        </div>
    )
};

export default SignupForm