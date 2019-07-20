import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styling/SignupForm.styling.js'

import SIGN_UP from './helpers/SignUp'

const SignupForm = (props) =>{
    const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword:""});
    const [missing,] = useState({username: false, email: false, password: false, confirmPassword: false});
    const [complete, setComplete] = useState(false); 
    const [errorMessage, setErrorMessage] = useState("");
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const didMountRef = useRef(false);
    const { classes } = props;

    useEffect(()=>{
        const checkMissing = () =>{
            if(didMountRef.current){
                user.username === ""? missing.username = true: missing.username = false;
                user.email === ""? missing.email = true: missing.email = false;
                user.password === ""? missing.password = true: missing.password = false;
                user.confirmPassword === ""?missing.confirmPassword = true:missing.confirmPassword = false;
                if(user.username && user.email && user.password && user.confirmPassword){
                    setComplete(true);
                }
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
    const handleSubmit = async(data, signUp) =>{
        if(user.password!== user.confirmPassword){
            return ()=>setErrorMessage("passwords do not match");
        }
        try{
            await signUp({varaibles: {username: user.username, email: user.email, password: user.password}})
        }catch(err){
            console.log(err);
        }

        return data;
    }
    return (
        <Mutation mutation = {SIGN_UP}>{(signUp, {data, error, loading})=>(
            <div className = {classes.form}>
            <Typography className = {classes.headerText} variant = "h4">Sign up to join the discussion here at Symposium</Typography>
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
                    <div>
                        <Button 
                            className = {classes.signUpButton}
                            variant = "contained" 
                            disabled = {!complete? true: false}
                            onClick = {(event)=>{
                                event.preventDefault();
                                handleSubmit(data, signUp)
                                }}
                            >Create An Account</Button>
                        <Typography variant = "h6"> Already have an account? </Typography>
                        <Button className = {classes.signUpButton} href = '/login' >Login</Button>
                    </div>
                </form>
            </div>
        )}</Mutation>
        
    )
};

export default withStyles(styles)(SignupForm)