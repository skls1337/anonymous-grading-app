import React,{Component} from 'react'
import { Route, Switch } from 'react-router'
import classes from './Background.css'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
class Background extends Component{
    render(){
     return(

        <div className={classes.Background}>
            <Switch>
                <Route path="/start/login" component={LoginPage}/>
                <Route path="/start/register" component={RegisterPage}/>
            </Switch>
        </div>
     )   
    }
}

export default Background;