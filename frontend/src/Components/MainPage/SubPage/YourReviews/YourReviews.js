import React,{Component} from 'react';
import axios from 'axios'
import ReviewsList from '../SubmitedReviews/ReviewsList/ReviewsList';
import classes from '../SubmitedReviews/SubmitedReviews.css';

const data = [
    {
        project: 'Proiectul MEU',
        label: [{ tag: 'Great' }, { tag: 'Nice' }, {tag: 'Good Job'}],
        grade: 10,
    },
    {
        project: 'Proiectul MEU',
        label: [{ tag: 'Not Nice' }],
        grade: 4,
    },
    {
        project: 'Proiectul MEU',
        label: [{ tag: 'Badass' }],
        grade: 5,
    },
    {
        project: 'Proiectul MEU',
        label: [{ tag: 'Badass' }],
        grade: 5,
    }
]

class yourReviews extends Component {
    
    state={
        reviews:[],
    
    }
    
    

    getYourProject = () => {
        const strUser=this.props.user.data._id
        axios.get("http://localhost:3001/api/v1/projects/"+strUser).then(res => {
            const Data = res.data.data
           this.setState({project:Data})
       }).catch(err => console.log(err))
    }
    componentDidMount=()=>{
        this.getYourProject()
    }
    render(){
    
    return (
        <div className={classes.SubRev}>
            {console.log(this.state.project)}
            {/* <ReviewsList controls={data} /> */}
        </div>
    );
}
}

export default yourReviews;