import React, { Component } from 'react';
import classes from './ReviewTheProject.css'
import buttonClasses from './ReviewProjects.css'
import axios from 'axios'

class ReviewTheProject extends Component {
    state = {
        grade:undefined,
        reviewLabels:undefined
    }
    tags = new Set();
    handleChange = (e) => {
        this.setState({ label: e.target.value });
        this.tags.push(this.state.label)
    }

    label = ['Well documented', 'Poorly documented', 'Impressive', 'Unimpresive', 'Original', 'Unoriginal', 'Just OK', 'Could be better', 'Breathtaking', 'Great Job', 'Disapointing', "Creative!"]
    getProjecById = () => {
        const projId = window.location.pathname
        const str = projId.slice(-24)
        console.log(str);
        axios.get('http://localhost:3001/api/v1/projects/' + str).then(res => {
            console.log(res.data);
            this.setState({
                title: res.data.data[0].title,
                description: res.data.data[0].description,
                upload: res.data.data[0].upload
            })
              
        }).catch(err => console.log(err))
    }
    handleCreateReview=()=>{
        const projId = window.location.pathname
        const str = projId.slice(-24)
        const labelsToSend=Array.from(this.tags)
        const review={
            label:labelsToSend,
            grade:this.state.grade
        }
        axios.post('http://localhost:3001/api/v1/reviews/' + str,review).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    }
    componentDidMount() {
        this.getProjecById()
    }
    render() {

        return (
            <div >
                <div className={classes.SubPage}>

                    <h1 style={{ padding: "10px", textAlign: "center", paddingBottom: "20px" }}>Title:{this.state.title}</h1>
                    <p style={{ padding: "10px", textAlign: "center", paddingBottom: "20px", fontSize: "20PX" }}>Description:{this.state.description}</p>
                    <a href={this.state.upload} style={{ padding: "10px", textAlign: "center", paddingBottom: "20px" }}><p>Link: {this.state.upload}</p></a>


                </div>

                <div className={classes.SubPage}>
                    {/*Review here*/}
                    <h1 style={{ padding: "10px", textAlign: "center", paddingBottom: "20px" }}>Review the project</h1>
                    <p style={{ padding: "10px", textAlign: "center", paddingBottom: "20px", fontSize: "20PX" }}>Grade</p>
                    <div style={{ width: "5%", margin: "auto", marginBottom: '10px' }}>
                        <select className={buttonClasses.select}  onChange={(e)=>this.setState({grade:e.target.value})}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                    <div >
                        {
                            this.label.map(value =>
                                <button className={buttonClasses.tags} onClick={() => {
                                    this.tags.add(value)
                                }}>{value}</button>)
                        }
                    </div>
                    <button 
                    onClick={this.handleCreateReview}
                    className={buttonClasses.ReviewButton} >Review this project</button>
                </div>

            </div>



        );

    }


}

export default ReviewTheProject;