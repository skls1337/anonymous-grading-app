import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LoginPage.css'
import facebook from '../../Assets/drawables/facebook.png'
import google from '../../Assets/drawables/google.png'
import linkedin from '../../Assets/drawables/linkedin.png'

const loginPage = (props) => {
    var onLogin = 0;
    function toRegister() {
        onLogin = 1;
    }
    return (

        <div className={classes.Login}>
            <div className={classes.All}>
                <div id="Partea Dreapta" className={classes.Dreapta}>
                    <p className={classes.Welcome}>Greetings!
                             <p className={classes.DescDreapta}>Enter your personal details and journey with us</p>
                    </p>

                    <Link to="/start/register">
                        <button className={classes.ButonDreapta} onClick={toRegister}>
                            SIGN UP
                        </button>
                    </Link>

                </div>

                <div className={classes.Stanga}>
                    <div id="Partea Stanga" className={classes.St}>
                        <p>Sign in
                                <br></br>
                            <div className={classes.Cercuri}>
                                <button className={classes.Circle}>
                                    <img src={facebook} alt="facebook"></img>
                                </button>
                                <button className={classes.Circle}>
                                    <img src={google} alt="google"></img>
                                </button>
                                <button className={classes.Circle}>
                                    <img src={linkedin} alt="linkedin"></img>
                                </button>
                            </div>
                        </p>


                        <p className={classes.para}>or use your email and password to login:</p>

                        <div className={classes.DrGri}>
                            <input className={classes.inputReg} placeholder="Email"></input>
                        </div>
                        <div className={classes.DrGri}>
                            <input className={classes.inputReg} placeholder="Password"></input>
                        </div>
                        <button className={classes.ButonSignUp}>
                            SIGN IN
                         </button>

                    </div>
                </div>

            </div>
        </div>


    )
}
export default loginPage;