import React,{Component} from 'react';
import classes from './ForgotPassword.css';
import axios from 'axios'
class ForgotPassword extends Component{
    handleSubmit=e=>{
        e.preventDefault()
        const data={
            email:this.email
        }
        axios.post('http://localhost:3001/api/v1/auth/forgotpassword',data).then(res=>{
            console.log(res);
        }).catch(err=>{console.log(err);})
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
                onChange={(event) => this.email=event.target.value}/>
            </div>
            <div  className={classes.centerButton}>
            <button className={classes.ResetButton}
            onClick={this.handleSubmit}>
                  RESET PASSWORD
            </button>
            </div>
        </div>        

    )
}

}

export default ForgotPassword;