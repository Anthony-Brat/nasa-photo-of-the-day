import React from "react";

const Picture =  ({ title, date, url}) => {
    return(
        
       <div>
          <h1>{title}</h1>
           <p>{date}</p>
           <img 
           className= "img" 
           src= {url}
           alt="Todays Choice"/>
           </div>
    );
};








export default Picture