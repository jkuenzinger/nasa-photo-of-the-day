import React from 'react';
import styled from "styled-components";

const PhotoDiv = styled.div`
display:flex;
width:100%;
flex-direction: column;
align-items: center;
justify-content: space-between;
justify-content: center;
border-style: solid 1px;
`;

const PhotoImg = styled.img`
width: 600px;
height: 400px;
object-fit: scale;
flex-shrink: 2;
`;


const PhotoCard = props => {
    return (
        
        <PhotoDiv>
/>
            <h2>{props.title}</h2>
            <h3>Date: {props.date}</h3>
            <p> Description: {props.explanation}</p>
            <PhotoImg src={props.url} alt=""/>
        </PhotoDiv>
    );
};
export default PhotoCard;