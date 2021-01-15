import React, { Component } from 'react';

import classes from '../ProfilePage/ProfilePage.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SubPage from '../../Components/MainPage/SubPageProject/SubPageProject';

class ProjectPage extends Component {
    render() {
        return (
            <Auxiliary>
                <div className={classes.ProfilePage}>
                    <SubPage />
                </div>
            </Auxiliary>
        );
    }
}

export default ProjectPage;