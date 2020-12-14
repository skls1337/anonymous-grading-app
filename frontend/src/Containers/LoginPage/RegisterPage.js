import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import classes from './RegisterPage.css';
import axios from 'axios'


class RegisterPage extends Component{
    handleRegister=(e)=>{
    e.preventDefault()
    const data={
            fullName:this.fullName,
            email:this.email,
            password:this.password
        }
        axios.post('http://localhost:3001/api/v1/auth/register',data).then(res=>{
            
        }).catch(err=>{
            console.log(err);
        })
    }



   render(){ 
    return(
       
        <div className={classes.Login}>
        <div className={classes.All}>
            <div id="Partea Dreapta" className={classes.Dreapta}>
                        <p className={classes.Welcome}>Welcome Back!</p>
                        <p className={classes.DescDreapta}>To keep connected with us please login with your personal info</p>
                      
                        <Link to="/start/login">
                            <button className={classes.ButonDreapta}>
                                SIGN IN
                            </button>
                        </Link>
                    </div>
           
           <div className={classes.Stanga}>
                     <div id="Partea Stanga" className={classes.St}>
                      
                            <br></br>
                            <div className={classes.Cercuri}>
                            <p>Create Account </p>
                              
                        </div>
                       
                        
                        <br></br>
                        <p className={classes.para}>Use your email for registration:</p>
                        
                        <div className={classes.DrGri}>
                            <input type="text"
                            className={classes.inputReg}
                            placeholder="Name"
                            onChange={e=>this.fullName=e.target.value}
                            ></input>
                        </div>
                        <div className={classes.DrGri}>
                        <input type="text"
                        className={classes.inputReg}
                        placeholder="Email"
                        onChange={e=>this.email=e.target.value}
                        ></input>
                        </div>
                        <div className={classes.DrGri}>
                        <input type="text"
                        className={classes.inputReg}
                        placeholder="Password"
                        onChange={e=>this.password=e.target.value}
                        ></input>
                        </div>
                        <button 
                        className={classes.ButonSignUp}
                        onClick={this.handleRegister}>
                            SIGN UP
                     </button>
                    

                    </div>
            </div>
            </div>
            </div>  
    )
    }
}
export default RegisterPage;