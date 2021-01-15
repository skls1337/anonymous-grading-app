import React from 'react';
import { Link } from 'react-router-dom';

import classes from './RegisterPage.css';
import facebook from '../../Assets/drawables/facebook.png';
import google from '../../Assets/drawables/google.png';
import linkedin from '../../Assets/drawables/linkedin.png';

const registerPage=(props)=>{
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
                                <button  className={classes.Circle}>
                                    <img src={facebook} alt="facebook"></img>
                                </button>
                                <button className={classes.Circle}>
                                <img src={google}alt="google"></img>
                                </button>
                                <button className={classes.Circle}>
                                <img src={linkedin}alt="linkedin"></img>
                                </button>
                        </div>
                       
                        
                        <br></br>
                        <p className={classes.para}>or use your email for registration:</p>
                        <div className={classes.DrGri}>
                            <input className={classes.inputReg}placeholder="Name"></input>
                        </div>
                        <div className={classes.DrGri}>
                        <input className={classes.inputReg}placeholder="Email"></input>
                        </div>
                        <div className={classes.DrGri}>
                        <input className={classes.inputReg}placeholder="Password"></input>
                        </div>
                        <button className={classes.ButonSignUp}>
                            SIGN UP
                     </button>

                    </div>
            </div>
            </div>
            </div>
            
        
 )
}
export default registerPage;