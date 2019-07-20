import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';


const FillForm = (props) =>{
    return(
        <form className = {props.classes.formContainer}>
            <TextField 
                 required = {true} 
                 label = "email"
                 name = "email"
                 value = {props.user.email}
                 onChange = {props.handleChange}
            />
            <TextField 
                 required = {true} 
                 label = "password"
                 name = "password"
                 type = "password"
                 value = {props.user.password}
                 onChange = {props.handleChange}
            />
            <Button 
                className = {props.classes.button}
                variant = "contained" 
                disabled = {!props.user.email ||!props.user.password ? true: false} 
                onClick = {(event)=>{
                    event.preventDefault();
                    props.handleSubmit(props.login, props.data)
                    }}
                >Login
            </Button>
        </form>
    )
}

export default FillForm;