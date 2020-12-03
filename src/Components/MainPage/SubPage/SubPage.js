import React, { Component } from 'react';

import Navbar2 from '../Navbar2/Navbar2';
import classes from './Subpage.css';

class SubPage extends Component {
    render () {
        return (
            <div className={classes.Subpage}>
                <Navbar2/>
            </div>
        );
    }
}

export default SubPage;