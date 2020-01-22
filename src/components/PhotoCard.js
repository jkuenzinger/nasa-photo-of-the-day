import React from 'react';
const PhotoCard = props => {
    return (
        <div>
            <h3>Date: {props.date}</h3>
            <p> Description: {props.explanation}</p>
            <img src={props.hdurl} alt=""/>
        </div>
    );
};
export default PhotoCard;