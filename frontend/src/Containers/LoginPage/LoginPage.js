import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import classes from './LoginPage.css';

class LoginPage extends Component {

    state = {
        loggedIn: false
    }

    postDataHandler = () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3001/api/v1/auth/login', data).then(response => {
            localStorage.setItem('token', response.data.token);
            if (response.status === 200) {
                this.setState({ loggedIn: true });
            }

        }).catch(err => console.log(err));
    }

    render() {
        if (this.state.loggedIn) {
            return (<Redirect to="/" />);
        }
        return (
            <div className={classes.Login}>
                <div className={classes.All}>
                    <div id="Partea Dreapta" className={classes.Dreapta}>
                        <p className={classes.Welcome}>Greetings!
                    </p>
                        <p className={classes.DescDreapta}>Enter your personal details and journey with us</p>

                        <Link to="/start/register">
                            <button className={classes.ButonDreapta}>
                                SIGN UP
                        </button>
                        </Link>

                    </div>

                    <div className={classes.Stanga}>
                        <div id="Partea Stanga" className={classes.St}>

                            <br></br>
                            <div className={classes.Cercuri} >
                                <p>Sign in</p>
                            </div>


                            <br></br>
                            <p className={classes.para}>Use your email and password to login:</p>

                            <div className={classes.DrGri}>
                                <input
                                    className={classes.inputReg}
                                    placeholder="Email"
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                ></input>
                            </div>
                            <div className={classes.DrGri}>
                                <input type="password"
                                    className={classes.inputReg}
                                    placeholder="Password"

                                    onChange={(event) => this.setState({ password: event.target.value })}></input>
                            </div>

                            <button
                                className={classes.ButonSignUp}
                                onClick={this.postDataHandler}
                            >
                                SIGN IN
                            </button>
                            <Link to='/start/forgotpassword'
                                style={{ textDecoration: 'none' }}>
                                <p
                                    className={classes.para1}
                                    onClick={this.redirectToForgotPassword}
                                >Forgot Password</p>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default LoginPage;