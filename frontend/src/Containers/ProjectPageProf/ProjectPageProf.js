import React, { Component } from 'react';

import SubPage from '../../Components/MainPage/SubPageProjectProf/SubPageProjectProf';
import classes from './ProjectPageProf.css';

class ProjectPageProf extends Component {
    render = () => {
        return(
            <div className={classes.ProjectPageProf}>
                <SubPage />
            </div>
        );
    }
}

export default ProjectPageProf;