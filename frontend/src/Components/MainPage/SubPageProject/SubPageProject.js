import React, { Component } from 'react';

import DisplayImages from '../../Multi/DisplayImages/DisplayImages'
import DisplayFullProject from '../../../Components/Multi/DisplayFullProject/DisplayFullProject';
import classes from './SubPageProject.css';
import subPageClasses from '../SubPage/SubPage.css';
import barClasses from '../Navbar2/Navbar2.css';

class ProjectPage extends Component {
    state = {
        projectName: '',
        shortDescription: '',
        fullDescription: '',
        youTubeLink: '',
        gitHubLink: '',
        fileInput: React.createRef()
    }
    title = "Submit Your Project";
    projectDisplay = null;
    imagesDisplay = null;

    handleProjectNameChange = (event) => {
        this.setState({projectName: event.target.value});
    }

    handleShortDescriptionChange = (event) => {
        this.setState({shortDescription: event.target.value});
    }

    handleFullDescriptionChange = (event) => {
        this.setState({fullDescription: event.target.value});
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
        this.setState({youTubeLink: event.target.value});
    }

    handleGitHubLinkChange = (event) => {
        this.setState({gitHubLink: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        try{
            console.log(this.state.fileInput.current.files);
        } catch (Exception) {
            console.log('No Photo Sir');
        }
    }

    render() {
        if(this.props.projectData.projectName !== ''){
            console.log('WE FOUND A NAME')
            this.title = "Edit Your Project";
            this.projectDisplay = <DisplayFullProject projectData={this.props.projectData} />;
        }

        this.imagesDisplay = this.state.fileInput.current !== null ? <DisplayImages images={this.state.imagePreviewUrl} /> : "Select some images";

        return (
            <div className={subPageClasses.SubPage}>
                <div className={barClasses.Navbar2}></div>
                
                {this.projectDisplay}

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
                            <textarea type='text' maxLength='6000' value={this.state.fullDescription} onChange={this.handleFullDescriptionChange} style={{height: '600px'}} />
                        </label>
                        <label>
                            <p>Add a Descriptive Image</p>
                            {this.imagesDisplay}
                            <input type='file' accept="image/png, image/jpeg" ref={this.state.fileInput} onChange={this.handleImagesChange} />
                        </label>
                        <label>
                            <p>Link a YouTube With A Demo of the Project</p>
                            <input type='text' maxLength='50' value={this.state.projectName} onChange={this.handleYouTubeLinkChange} />
                        </label>
                        <label>
                            <p>Add the GitHub Repo Containing Your Project</p>
                            <input type='text' maxLength='50' value={this.state.projectName} onChange={this.handleGitHubLinkChange} />
                        </label>
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProjectPage;