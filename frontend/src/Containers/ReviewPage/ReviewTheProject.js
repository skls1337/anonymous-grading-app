import React, { Component } from 'react';
import classes from './ReviewTheProject.css'
import buttonClasses from './ReviewProjects.css'
import axios from 'axios'
import DisplayFullProject from '../../Components/Multi/DisplayFullProject/DisplayFullProject'
import classesDisplay from '../../Components/Multi/DisplayFullProject/DisplayFullProject.css'



class ReviewTheProject extends Component {
    state = {
        grade: undefined,
        reviewLabels: undefined,
        projectData: {
            projectName: '',
            shortDescription: '',
            fullDescription: '',
            ytLink: '',
            ghLink: '',
            images: '',
            projectId: ''
        }

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
            const projData = {
                projectName: res.data.data.title,
                shortDescription: res.data.data.description,
                fullDescription: res.data.data.body,
                ytLink: res.data.data.video,
                ghLink: res.data.data.upload,
                images: res.data.data.images
            }
            this.setState({
                title: res.data.data.title,
                description: res.data.data.description,
                upload: res.data.data.upload,
                projectData: projData

            })

        }).catch(err => console.log(err))
    }
    handleCreateReview = () => {
        const projId = window.location.pathname
        const str = projId.slice(-24)
        const labelsToSend = Array.from(this.tags)
        const review = {
            label: labelsToSend,
            grade: this.state.grade
        }
        axios.post('http://localhost:3001/api/v1/reviews/' + str, review).then(res => {
            console.log(res);
        }).catch(err => console.log(err))
    }
    componentDidMount() {
        this.getProjecById()


    }

    render() {
            if(this.props.user.data.role==="reviewer"){   
        return (
            <div >
                <br></br>
                <br></br>
                <br></br>
                <div className={classesDisplay.DisplayFullProject}>
                    <DisplayFullProject projectData={this.state.projectData} />
                </div>

               

                <div className={classes.SubPage}>
                    {/*Review here*/}
                    <h1 style={{ padding: "10px", textAlign: "center", paddingBottom: "20px" }}>Review the project</h1>
                    <p style={{ padding: "10px", textAlign: "center", paddingBottom: "20px", fontSize: "20PX" }}>Grade</p>
                    <div style={{ width: "5%", margin: "auto", marginBottom: '10px' }}>
                        <select className={buttonClasses.select} onChange={(e) => this.setState({ grade: e.target.value })}>
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
    }else{
        return(
            <div  >
            <br></br>
            <br></br>
            <br></br>
            <div className={classesDisplay.DisplayFullProject}
            
            style={{width:"120%",marginLeft:"100px",marginRight:"100px"}}>
                <DisplayFullProject projectData={this.state.projectData} />
            </div>
            </div>
        )
    }

    }


}

export default ReviewTheProject;