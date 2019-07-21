import React,{ useState } from 'react';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


import FillForm from './FillForm';
import LOGIN from './helpers/Login';

import styles from './styles/LoginForm.styles';

const LoginForm = (props) =>{
    const [user,setUser] = useState({email:"", password:""});
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) =>{
        const value = event.target.value;
        setUser({...user, [event.target.name]: value});
    };
    const handleSubmit = async(login, data)=>{
        try{
            await login({variables: {email: user.email, password: user.password}}).then((res)=>{
                if(res.data.login.errorMessage){
                    return setErrorMessage(res.data.login.errorMessage)
                }else{
                    localStorage.setItem('authorization', res.data.login.token);
                    props.history.push("/timeline")
                }
            })
        }catch(err){
            console.log(err)
        }
        return data;
    }
    const { classes } = props;

    return(
        <Mutation mutation = {LOGIN}>{(login, {data,error,loading})=>(
                <div className = {classes.form}>
                    <Typography variant = "h4" className = {classes.headerText}>
                        Log in to Symposium 
                    </Typography>
                    {!loading?  <FillForm
                                    classes = {classes}
                                    handleChange = {handleChange}
                                    user = {user}
                                    handleSubmit = {handleSubmit}
                                    data = {data}
                                    login = {login}
                    />: <div className = {classes.loadingContainer}>
                            <CircularProgress />
                        </div>
                    }
                    
                    <Typography variant = "h6">Dont have an Account?</Typography>
                    {errorMessage  ?
                        <p>{errorMessage}</p>:
                        null
                    }
                    <div className = {classes.formContainer}>
                        <Button
                            variant = "contained"
                            href = "/"
                            className = {classes.button}
                            
                        >
                            Signup
                        </Button>
                    </div>
                </div>
            )}
        </Mutation>
    )
}
export default withStyles(styles)(LoginForm)