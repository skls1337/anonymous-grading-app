import React, { Component } from 'react';
import axios from 'axios';

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
            images: ''
        }
    }
    _isMounted = false;

    componentDidMount = () => {
        this._isMounted = true;

        axios.get(`http://localhost:3001/api/v1/projects/${this.props.user.id}`).then(res => {
            if (this._isMounted) {
                const project = res.data.data;
                console.log(project);
                this.setState({
                    projectData: {
                        projectName: project.title === undefined ? '' : project.title,
                        shortDescription: project.description,
                        fullDescription: project.body,
                        ytLink: project.video,
                        ghLink: project.upload,

                    }
                });
            }

        }).catch(err => console.log(err));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <Auxiliary>
                <div className={classes.ProjectPage}>
                    <SubPage projectData={this.state.projectData} />
                </div>
            </Auxiliary>
        );
    }
}

export default ProjectPage;