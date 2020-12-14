import React,{Component} from 'react'
import { Route, Switch } from 'react-router'
import classes from './Background.css'
import ForgotPassword from './ForgotPassword'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

class Background extends Component{
    render(){
     return(

        <div className={classes.Background}>
            <Switch>
                <Route path="/start/login" component={()=><LoginPage setUser={this.setUser}/>}/>
                <Route path="/start/register" component={RegisterPage}/>
                <Route path="/start/forgotpassword" component={ForgotPassword}/>
            </Switch>
        </div>
     )   
    }
}

export default Background;