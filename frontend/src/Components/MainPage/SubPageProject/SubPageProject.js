import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import DisplayImages from '../../Multi/DisplayImages/DisplayImages'
import DisplayFullProject from '../../../Components/Multi/DisplayFullProject/DisplayFullProject';
import classes from './SubPageProject.css';
import subPageClasses from '../SubPage/SubPage.css';
import barClasses from '../Navbar2/Navbar2.css';
import axios from 'axios';

class ProjectPage extends Component {
    state = {
        projectName: '',
        shortDescription: '',
        fullDescription: '',
        youTubeLink: '',
        gitHubLink: '',
        fileInput: React.createRef()
    };

    projectData = {};

    title = "Submit Your Project";
    projectId = '';
    projectDisplay = null;
    imagesDisplay = null;
    deleteDisplay = null;

    handleProjectNameChange = (event) => {
        this.setState({ projectName: event.target.value });
    }

    handleShortDescriptionChange = (event) => {
        this.setState({ shortDescription: event.target.value });
    }

    handleFullDescriptionChange = (event) => {
        this.setState({ fullDescription: event.target.value });
    }

    handleImagesChange = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let file = this.state.fileInput.current.files[0]

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    handleYouTubeLinkChange = (event) => {
        this.setState({ youTubeLink: event.target.value });
    }

    handleGitHubLinkChange = (event) => {
        this.setState({ gitHubLink: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.projectData = {
            video: this.state.youTubeLink,
            upload: this.state.gitHubLink,
            title: this.state.projectName,
            author: this.props.user.fullname,
            description: this.state.shortDescription,
            body: this.state.fullDescription
        }

        if(!this.projectData.title || !this.projectData.body || !this.projectData.description){
            alert("The project needs to have a title, short description and full description");
            return;
        }

        console.log("Data:")
        console.log(this.projectData);

        try {
            console.log(this.state.fileInput.current.files);
        } catch (Exception) {
            console.log('No Photo Sir');
        }

        if (this.props.projectData.projectName !== '') {
            this.handleUpdate(this.projectData);
        } else {
            axios.post('http://localhost:3001/api/v1/projects', this.projectData).then(
                res => {
                    console.log("Creating Project");
                    console.log(res);

                    if (this.state.file) {
                        axios.get(`http://localhost:3001/api/v1/projects/user/${this.props.user.id}`).then(res => {
                            console.log("Getting new project ID");
                            console.log(res);
                            const projectID = res.data.data[0]._id;

                            this.changeId(projectID);
                            console.log("Id found:" + projectID);

                            console.log(this.state.file);
                            axios.put(`http://localhost:3001/api/v1/projects/${this.projectId}/photo`, { images: this.state.file }).then(res => {
                                console.log("Sending photo" + this.state.file);
                                console.log(res);
                            })

                        }).catch(err => console.log(err));
                    }
                }
            ).catch(err => console.log(err));
        }

        this.props.history.push('/home/profile/project');

    }

    handleUpdate = (projectData) => {
        axios.get(`http://localhost:3001/api/v1/projects/user/${this.props.user.id}`).then(res => {
            const projectID = res.data.data[0]._id;

            this.changeId(projectID);

            axios.put(`http://localhost:3001/api/v1/projects/${this.projectId}`, projectData).then(res => {
                console.log(res);
            }).catch(err => console.log(err));

        }).catch(err => console.log(err));
    }

    changeId = (id) => {
        this.projectId = id;
    }

    render() {
        if (this.props.projectData.projectName !== '') {
            console.log('WE FOUND A NAME')
            this.title = "Edit Your Project";
            this.projectDisplay = <DisplayFullProject projectData={this.props.projectData} />;
            this.deleteDisplay = <button className={classes.DeleteButton} onClick={this.props.handleDelete}>DELETE PROJECT</button>
        }

        this.imagesDisplay = this.state.fileInput.current !== null ? <DisplayImages images={this.state.imagePreviewUrl} /> : "Select some images";

        return (
            <div className={subPageClasses.SubPage}>
                <div className={barClasses.Navbar2}></div>

                {this.projectDisplay}
                {this.deleteDisplay}
                <div className={classes.SubPageProject}>
                    <h1>{this.title}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p>Enter Project Name</p>
                            <input type='text' maxLength='30' value={this.state.projectName} onChange={this.handleProjectNameChange} />
                        </label>
                        <label>
                            <p>Enter a Short Description</p>
                            <textarea type='text' maxLength='250' value={this.state.shortDescription} onChange={this.handleShortDescriptionChange} />
                        </label>
                        <label>
                            <p>Enter the Full Description of Your Project</p>
                            <textarea type='text' maxLength='6000' value={this.state.fullDescription} onChange={this.handleFullDescriptionChange} style={{ height: '600px' }} />
                        </label>
                        <label>
                            <p>Add a Descriptive Image</p>
                            {this.imagesDisplay}
                            <input type='file' accept="image/png, image/jpeg" ref={this.state.fileInput} onChange={this.handleImagesChange} />
                        </label>
                        <label>
                            <p>Link a YouTube With A Demo of the Project</p>
                            <input type='text' maxLength='50' value={this.state.youTubeLink} onChange={this.handleYouTubeLinkChange} />
                        </label>
                        <label>
                            <p>Add the GitHub Repo Containing Your Project</p>
                            <input type='text' maxLength='50' value={this.state.gitHubLink} onChange={this.handleGitHubLinkChange} />
                        </label>
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectPage);