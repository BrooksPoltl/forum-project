import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styling/SignupForm.styling.js'

import FillForm from './FillForm';

import SIGN_UP from './helpers/SignUp'

const SignupForm = (props) =>{
    const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword:""});
    const [missing,] = useState({username: false, email: false, password: false, confirmPassword: false});
    const [complete, setComplete] = useState(false); 
    const [success, setSuccess] = useState(false);
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
            return setErrorMessage("passwords do not match");
        }
        try{
            await signUp({variables: {username: user.username, email: user.email, password: user.password}}).then((res)=>{
                console.log(res)
                if(res.data.signUp.errorMessage){
                    console.log(res)
                    if(res.data.signUp.errorMessage === "Email already exist"){
                        missing.email = true;
                    }else{
                        missing.username = true;
                    }
                    return setErrorMessage(res.data.signUp.errorMessage);
                } else{
                    setErrorMessage("");
                    setSuccess(true);
                }
            })
        }catch(err){
            console.log(err);

        }

        return data;
    }
    return (
        <Mutation mutation = {SIGN_UP}>{(signUp, {data, error, loading})=>(
            <div className = {classes.form}>
                <Typography className = {classes.headerText} variant = "h5">
                    Sign up to join the discussion here at Symposium
                </Typography>
                    {!loading && !success?  <FillForm
                                    user = {user} 
                                    missing = {missing} 
                                    classes = {classes} 
                                    handleSubmit = {handleSubmit} 
                                    handleChange = {handleChange}
                                    complete = {complete}
                                    data = {data}
                                    signUp = {signUp}
                                />:
                                null
                    }
                    {loading?   <div className = {classes.loadingContainer}>
                                    <CircularProgress />
                                </div>:
                                null
                    }
                    {errorMessage?  <p className = {classes.errorMessage}>
                                        {errorMessage}
                                    </p>:
                                    null
                    }
                <Typography variant = "h6">
                    {!data && !success?
                        "Already have an account?":
                        "Thank you for joining symposium, click here to login"
                    }
                </Typography>
                <Button className = {classes.signUpButton} href = '/login' >Login</Button>
            </div>
        )}</Mutation>
        
    )
};

export default withStyles(styles)(SignupForm)