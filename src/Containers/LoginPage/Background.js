import React,{Component} from 'react'
import classes from './Background.css'
import LoginPage from './LoginPage'
class Background extends Component{
    render(){
     return(

        <div className={classes.Background}>
                <LoginPage/>
        </div>
     )   
    }
}

export default Background;