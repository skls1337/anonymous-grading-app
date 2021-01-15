import React from 'react';

import classes from './DisplayImages.css';



const displayImages = (props) => {
    return(
        <div className={classes.DisplayImages}>
            {props.images.map((image)=>(
                <img key={image.name} src={image} alt='404'/>
            ))}
        </div>
    );
}

export default displayImages;