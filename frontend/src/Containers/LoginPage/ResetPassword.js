import React,{Component} from 'react';
import classes from './ResetPassword.css';
import axios from 'axios'
import { Redirect } from 'react-router';

class ResetPassword extends Component{
  state={}

    handleSubmit=e=>{
        e.preventDefault()
        const data={
            token:this.props.match.params.id,
            password:this.pass,
         
        }
        axios.put('http://localhost:3001/api/v1/auth/resetpassword/'+data.token,data).then(res=>{
            console.log(res);
            this.setState({
                reset:true})
        }).catch(err=>{console.log(err);})

    }
  
    render(){
        if(this.state.reset){
            return <Redirect to='/start/login'/>
        }
        return(
        <div>
            <p className={classes.titlu}>Reset your password? </p>
            <p className={classes.desc}>Enter your new password</p>
            <div className={classes.DrGri}>
            <input
                className={classes.inputReg} 
                 placeholder="New password"
                onChange={(event) => this.pass=event.target.value}
            />
             </div>
             <div className={classes.DrGri}>
            <input
                className={classes.inputReg} 
                 placeholder="Confirm password"
                onChange={(event) => this.confpass=event.target.value}
            />
            </div>
            <div  className={classes.centerButton}>
            <button className={classes.ResetButton}
            onClick={this.handleSubmit}>
                  CHANGE PASSWORD
            </button>
            </div>
        </div>        

        )
    }
}
export default ResetPassword;