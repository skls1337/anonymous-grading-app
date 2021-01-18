import React, { Component } from 'react';
import axios from 'axios';

import DisplayPR from '../../Multi/DisplayProjectsWithReviews/DisplayProjectsWithReviews';
import subPageClasses from '../SubPage/SubPage.css';
import barClasses from '../Navbar2/Navbar2.css';
import loaderClasses from '../../Multi/Extra/Loader.css';
import classes from './SubPageProjectProf.css';


class SubPageProjectProf extends Component {
    state = {
        projects: []
    }
    _isMounted = false;
    _isLoaded = false;

    componentDidMount = () => {
        this._isMounted = true;

        axios.get('http://localhost:3001/api/v1/projects').then(res => {
            if (this._isMounted) {
                this._isLoaded = true;
                this.setState({
                    projects: res.data.data
                });
            }
        }).catch(err => console.log(err));
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render = () => {

        return (
            <div className={subPageClasses.SubPage}>
                <div className={barClasses.Navbar2} />
                <div className={classes.SubPageProjectProf}>
                    <h1>This is a Complete List off all Projects</h1>
                </div>

                {this._isLoaded ? this.state.projects.map((ctrl) => <DisplayPR project={ctrl}/>) : <div style={{margin:'auto', width:'40px'}}><div className={loaderClasses.ldsEllipsis} ><div></div><div></div><div></div><div></div></div></div>}

                

            </div>
        );
    }
}

export default SubPageProjectProf;