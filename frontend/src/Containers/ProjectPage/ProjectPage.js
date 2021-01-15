import React, { Component } from 'react';

import classes from '../ProjectPage/ProjectPage.css';
import subPageClasses from '../../Components/MainPage/SubPage/SubPage.css';
import barClasses from '../../Components/MainPage/Navbar2/Navbar2.css';

class ProjectPage extends Component {
    state = {
        projectName: '',
        shortDescription: '',
        fullDescription: ''
    }

    handleProjectNameChange = (event) => {
        this.setState({projectName: event.targe.value});
    }

    handleShortDescriptionChange = (event) => {
        this.setState({shortDescription: event.target.value});
    }

    handleFullDescriptionChange = (event) => {
        this.setState({fullDescription: event.target.value});
    }

    handleSubmit = () => {
        console.log(this);
    }

    render() {
        return (
            <div className={subPageClasses.SubPage}>
                <div className={barClasses.Navbar2}></div>
                <div className={classes.SubPageProject}>
                    <h1>Submit Your Project</h1>
                    <form>
                        <label>
                            <p>Enter Project Name</p>
                            <input type='text' maxLenght='30' value={this.state.projectName} onChange={this.handleProjectNameChange} />
                        </label>
                        <label>
                            <p>Enter A Short Description</p>
                            <textarea type='text' maxLength='250' value={this.state.shortDescription} onChange={this.handleShortDescriptionChange} />
                        </label>
                        <label>
                            <p>Enter The Full Description Of You Project</p>
                            <textarea type='text' maxLength='2650' value={this.state.fullDescription} onChange={this.handleFullDescriptionChange} style={{height: '600px'}} />
                        </label>
                    </form>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </div>
            </div>
        );
    }
}

export default ProjectPage;