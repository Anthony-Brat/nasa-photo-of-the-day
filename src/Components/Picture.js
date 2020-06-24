import React from "react";

const Picture =  ({title, date, url, explanation}) => {
    return(
        
       <div>
          <h1>{title}</h1>
           <p>{date}</p>
           <img 
           className= "img" 
           src= {url}
           alt="Todays Selection"/>
           <p>{explanation}</p>

           </div>
    );
};








export default Picture