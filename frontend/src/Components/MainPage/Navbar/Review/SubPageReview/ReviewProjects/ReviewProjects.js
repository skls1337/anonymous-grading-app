import React from 'react';
import classes from '../../../../SubPage/SubmitedReviews/SubmitedReviews.css';
import ProjectList from './ProjectList/ProjectList'
const datas = [
    {
        project: 'Domnul Nostru',
        
    },
    {
        project: 'Ce zici boss',
        
    },
    {
        project: 'Mama e misto',
       
    },
];
const reviwProject=()=>{

    return(
        <div className={classes.SubRev}>
            <ProjectList controls={datas} />
        </div>
    );
}

export default reviwProject;