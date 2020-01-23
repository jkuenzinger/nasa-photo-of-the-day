import React from 'react';
const PhotoCard = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>Date: {props.date}</h3>
            <p> Description: {props.explanation}</p>
            <img src={props.url} alt=""/>
        </div>
    );
};
export default PhotoCard;