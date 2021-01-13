import React,{Component} from 'react'
import { Route, Switch } from 'react-router'
import classes from './Background.css'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

class Background extends Component{
    render(){
     return(

        <div className={classes.Background}>
            <Switch>
                <Route path="/start/login" component={()=><LoginPage setUser={this.props.setUser}/>}/>
                <Route path="/start/register" component={RegisterPage}/>
                <Route path="/start/forgotpassword" component={ForgotPassword}/>
                <Route path="/start/resetpassword/:id" component={ResetPassword}/>
            </Switch>
        </div>
     )   
    }
}

export default Background;