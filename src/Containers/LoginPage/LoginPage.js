import React from 'react';
import classes from './LoginPage.css'
import facebook from '../../Assets/drawables/facebook.png'
import google from '../../Assets/drawables/google.png'
import linkedin from '../../Assets/drawables/linkedin.png'

 const loginPage=(props)=>{
        return(
           
            <div className={classes.Login}>
            <div className={classes.All}>
                <div id="Partea Dreapta" className={classes.Dreapta}>
                            <p className={classes.Welcome}>Welcome Back!
                             <p className={classes.DescDreapta}>To keep connected with us please login with your personal info</p>
                            </p>
                            <button className={classes.ButonDreapta}>
                                SIGN IN
                         </button>
                        </div>
               
               <div className={classes.Stanga}>
                         <div id="Partea Stanga" className={classes.St}>
                            <p>Create Account
                                <br></br>
                                <div className={classes.Cercuri}>
                                    <button  className={classes.Circle}>
                                        <img src={facebook}></img>
                                    </button>
                                    <button className={classes.Circle}>
                                    <img src={google}></img>
                                    </button>
                                    <button className={classes.Circle}>
                                    <img src={linkedin}></img>
                                    </button>
                            </div>
                            </p>
                            
                            
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
export default loginPage;