import React, { Component } from 'react';
import axios from 'axios';

import classes from './ProjectPage.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SubPage from '../../Components/MainPage/SubPageProject/SubPageProject';

class ProjectPage extends Component {
    state = {
        projectData: {
            projectName: 'Domnule',
            shortDescription: 'Acesta este un proiect da da un proiect',
            fullDescription: 'Emily~she/they~BLM ✊🏿~ACAB~✨Eat the rich✨~🌈 panromantic demisexual nonbinary~Virgo 😻~Kill all m*n 😘💕~ Cis het Wh*te people DNI 😼~Anti-fascist Socialist ☭~ STALIN DID NOTHING WRONG ❤️~ Depressed/has ADHD/has PTSD/~Dems stole the election!~ #TRUMP2020, Married to my devout husband 🙏~True Patriot 🇺🇸~ I love Jesus AMEN 😇⛪!!~Vaccines kill!~Support 🇮🇱!~🐍🎩 Free market advocate~Bitcoin investor 💰💸~I ♥ ELON MUSK~#TAXATIONISTHEFT~',
            ytLink: 'https://www.youtube.com/watch?v=Xojy7eXQX6M',
            ghLink: 'https://github.com/SebastianDochia/Simple-Chess-Game',
            images: 'no-image'
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:3001/api/v1/projects/:id').then(res => {
            const project = res.data;
            this.setState({
                projectData: {
                    projectName: project.title,
                    shortDescription: project.description,
                    fullDescription: project.body,   
                    ytLink: project.video,
                    ghLink: project.upload,
                    images: project.images[0]
                }
            });
        }).catch(err => console.log(err));
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