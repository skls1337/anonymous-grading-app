import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReviewProjects from '../ReviewPage/ReviewProjects'
import classes from './ProjectPage.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SubPage from '../../Components/MainPage/SubPageProject/SubPageProject';

class ProjectPage extends Component {
    state = {
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
    _isMounted = false;

    handleDelete = () => {
        axios.delete(`http://localhost:3001/api/v1/projects/${this.state.projectData.projectId}`).then(res => {
            console.log(res);
            this.setState({
                projectData: {
                    projectName: '',
                    shortDescription: '',
                    fullDescription: '',
                    ytLink: '',
                    ghLink: '',
                    images: '',
                    projectId: ''
                }
            });
            this.props.history.push('/home/profile/project');
        });
    }

    componentDidMount = () => {
        this._isMounted = true;

        axios.get(`http://localhost:3001/api/v1/projects/user/${this.props.user.id}`).then(res => {
            if (this._isMounted) {
                const project = res.data.data[0];
                console.log(project);
                console.log(project.video);

                this.setState({
                    projectData: {
                        projectName: (project.title === undefined) ? '' : project.title,
                        shortDescription: project.description,
                        fullDescription: project.body,
                        ytLink: project.video,
                        ghLink: project.upload,
                        images: project.images,
                        projectId: project._id
                    }
                });
            }

        }).catch(err => console.log(err));
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render() {
        if (this.props.user.data.role === "reviewer" || this.props.user.data.role === "student") {
            return (
                <Auxiliary>
                    <div className={classes.ProjectPage}>
                        <SubPage projectData={this.state.projectData} user={this.props.user} handleDelete={this.handleDelete} />
                    </div>
                </Auxiliary>
            );
        }else{
            return(
                <div className={classes.ProjectPage}>
                    {console.log(this.props.user.data.role)}
                    <ReviewProjects projects={this.props.projects}/>
                </div>
            )
        }
    }
}

export default withRouter(ProjectPage);