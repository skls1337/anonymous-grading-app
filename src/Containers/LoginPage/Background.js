import React,{Component} from 'react'
import classes from './Background.css'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
class Background extends Component{
    render(){
     return(

        <div className={classes.Background}>
                <LoginPage/>
                <RegisterPage/>
        </div>
     )   
    }
}

export default Background;