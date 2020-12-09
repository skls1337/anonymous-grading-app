import React,{Component} from 'react';
import classes from './ForgotPassword.css';

class ForgotPassword extends Component{
    state={
        email:''
    }
    render(){
    

    return(
        <div>
            <p className={classes.titlu}>Forgot your password? </p>
            <p className={classes.desc}>Enter your email in order to reset your password. If the email is valid you will receive a link at that address that will reset your password</p>
            <div className={classes.DrGri}>
            <input
                className={classes.inputReg} 
                 placeholder="Email"
                onChange={(event) => this.setState({email: event.target.value})}
                />
            </div>
        </div>        

    )
}

}

export default ForgotPassword;