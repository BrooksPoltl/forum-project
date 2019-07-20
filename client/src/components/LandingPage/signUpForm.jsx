import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './styling/SignupForm.styling.css'


const SignupForm = () =>{
    const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword:""});
    const [missing, setMissing] = useState(""); 

    const handleChange = (event) =>{
        if(!user.username && event.target.name !== "username"){
            setMissing("username");
        }
        else if(!user.email && event.target.name !== "email"){
            setMissing("email");
        }
        else if (!user.password && event.target.name !== "password"){
            setMissing("password");
        }
        else if(!user.confirmPassword && event.target.name !== "confirmPassword"){
            setMissing("confirmPassword");
        }else{
            setMissing("");
        }
        setUser({...user, [event.target.name]: event.target.value});
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
                    error = {missing === "username"? true : false}
                />
                <TextField
                    required = {true}
                    label = "email"
                    value = {user.email}
                    name = "email"
                    onChange = {handleChange}
                    error = {missing === "email"? true : false}
                />
                <TextField
                    required = {true}
                    label = "password"
                    value = {user.password}
                    name = "password"
                    type = "password"
                    onChange = {handleChange}
                    error = {missing === "password"? true : false}
                />
                <TextField 
                    required = {true} 
                    label = "confirm password"
                    value = {user.confirmPassword}
                    name = "confirmPassword"
                    type = "password"
                    onChange = {handleChange}
                    error = {missing === "confirmPassword" ? true : false}
                />
                <Button  color = "red">Sign Up</Button>
                <Button  >Login</Button>
            </form>
        </div>
    )
};

export default SignupForm