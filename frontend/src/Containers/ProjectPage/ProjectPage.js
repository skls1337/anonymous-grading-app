import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

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
        axios.delete(`http://localhost:3001/api/v1/projects/${this.state.projectData.projectId}`).then(res=>{
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
                console.log(project.images);
                
                this.setState({
                    projectData: {
                        projectName: project.title === undefined ? '' : project.title,
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
        return (
            <Auxiliary>
                <div className={classes.ProjectPage}>
                    <SubPage projectData={this.state.projectData} user={this.props.user} handleDelete={this.handleDelete}/>
                </div>
            </Auxiliary>
        );
    }
}

export default withRouter(ProjectPage);