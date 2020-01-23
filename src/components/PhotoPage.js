import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from 'axios';
import styled from "styled-components";
import HeaderItem from "./HeaderItem";


const PhotoContainer = styled.div`
display:flex;
width:50%;
height: 300px;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-left:25%;


`;




 function PhotoPage(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=f99FqFapxKgObJJoh7oJ6klaCAdecegMpTaBdItk")
          .then(response => {
            console.log(response.data);
            setPhoto(response.data);
          })
          .catch(error => {
            console.log("the data was not returned", error);
     });
       }, []);
      return (
        <PhotoContainer>
          <HeaderItem/>
         <PhotoCard
                  key={photo.date}
                  title={photo.title}
                  date={photo.date}
                  explanation={photo.explanation}
                   url={photo.url}
                   photo={photo}
                  />
         </PhotoContainer>
       
      );
}

export default PhotoPage;