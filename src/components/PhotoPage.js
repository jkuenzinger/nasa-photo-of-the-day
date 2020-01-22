import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from 'axios';

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
          <div>
              <PhotoCard
                  key={photo.date}
                  date={photo.date}
                  description={photo.explanation}
                  photo={photo.url}
                  />
              
          </div>
      );
}

export default PhotoPage;