import React from 'react';

import classes from './DisplayImages.css';



const displayImages = (props) => {
    return(
        <div className={classes.DisplayImages}>
            <img src={props.images} alt="uploaded file" width='60%' height='auto'></img>
        </div>
    );
}

export default displayImages;