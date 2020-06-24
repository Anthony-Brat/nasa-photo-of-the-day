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
            <Picture
                key={pod.id} 
                title={pod.title}
                date={pod.date}
                url={pod.url}
                explanation={pod.explanation}
                />
            );
        
  


}