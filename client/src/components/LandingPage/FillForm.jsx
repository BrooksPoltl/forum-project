import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const FillForm = (props) =>{
    return(
        <form className = {props.classes.formContainer}>
                    <TextField
                        required = {true} 
                        label = "username"
                        value = {props.user.username}
                        name = "username"
                        onChange = {props.handleChange}
                        error = {props.missing.username}
                    />
                    <TextField
                        required = {true}
                        label = "email"
                        value = {props.user.email}
                        name = "email"
                        onChange = {props.handleChange}
                        error = {props.missing.email}
                    />
                    <TextField
                        required = {true}
                        label = "password"
                        value = {props.user.password}
                        name = "password"
                        type = "password"
                        onChange = {props.handleChange}
                        error = {props.missing.password}
                    />
                    <TextField 
                        required = {true} 
                        label = "confirm password"
                        value = {props.user.confirmPassword}
                        name = "confirmPassword"
                        type = "password"
                        onChange = {props.handleChange}
                        error = {props.missing.confirmPassword}
                    />
                    <div>
                        <Button 
                            className = {props.classes.signUpButton}
                            variant = "contained" 
                            disabled = {!props.complete? true: false}
                            onClick = {(event)=>{
                                event.preventDefault();
                                props.handleSubmit(props.data, props.signUp)
                                }}
                            >Create An Account</Button>
                        
                    </div>
        </form>
    )
}
export default FillForm