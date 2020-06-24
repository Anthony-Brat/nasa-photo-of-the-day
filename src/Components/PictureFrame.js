import React, {useState, useEffect } from "react";
import axios from "axios";
import Picture from "./Picture"


export default function PictureFrame(){
const [pod, setPod] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=4khh3WBTXsjKPDkVNdbMPsGZuJJFATrcuql11bUi`)
      .then(res => {
        console.log(res);
        setPod(res.data); 
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

        return(
            <div className="nasaPod">
      {pod.map(nasaPod => {
        return(
            <Picture
                key={nasaPod.id} 
                title={nasaPod.title}
                date={nasaPod.date}
                url={nasaPod.url}
                />
            );
        })}
        </div>
        );
  


}