import React,{ Component } from 'react'
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary'
import pp from '../../../../Assets/drawables/placeholderPP2.png';
import Profile from '../../../MainPage/Profile/Profile';
import classes from '../../../../Containers/ProfilePage/ProfilePage.css'
import SubPageReview from './SubPageReview/SubPageReview'
class Review extends Component{

  

    render(){
      if(this.props.user.data.role==="prof"||this.props.user.data.role==="reviewer"){
       return(
          <Auxiliary>
                 <div className={classes.ProfilePage}>
                    <Profile 
                    img={pp}
                     name={this.props.user.data.fullname} 
                     group={this.props.user.data.group}
                      year={this.props.user.data.year}/>
                    <div className={classes.Placeholder}></div>
                      <SubPageReview />
                    
                   
                </div>
          </Auxiliary>
        );
    }else{
      return(
        <Auxiliary>
        <div className={classes.ProfilePage}>
           <Profile 
           img={pp}
            name={this.props.user.data.fullname} 
            group={this.props.user.data.group}
             year={this.props.user.data.year}/>
           <div className={classes.Placeholder}></div>
              <div>
                {/*TODO: de facu componenet pt non reviewuari*/}
                <p>You cannot review any projects</p>
              </div>
          </div>
      </Auxiliary>
      )
  }
}

}

export default Review;