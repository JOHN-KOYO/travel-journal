
export default function EntryInfo (props){

return( <article className="journal-info"> 
 
  <img src={props.img} 
  alt={`photo of ${props.name}`} /> 
  


  <div className="mountain-location"> 
  <img src="locationIcon.PNG" alt="location icon" /> 
  <p>{props.country}</p> 
  <>{props.link}</>
  </div> 

  <div className="mountain-name"> 
  <h2>{props.name}</h2> 
  <p>{props.date}</p>
  <p>{props.text}</p>
  </div> 

  </article> )
   }



