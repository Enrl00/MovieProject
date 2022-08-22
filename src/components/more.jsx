import { useMovieContext } from "../provider/MovieInfo";
import { useState } from "react";
import {Link } from "react-router-dom";
import Picture from "./picture";
import Form from './form'
import '../styles/more.css'
const More = () => {
const {chosen} = useMovieContext();
const [click, setClickState] = useState(false)
if(click === false){
    return(
        <div className="bigContentContainer">
         <Picture data={chosen.url}/>
         
         <div className="detailedTextContainer">
                     <h1>{chosen.name}</h1>
                     <h2>On screeen</h2>
                     <div className="aboutText">
                        <div className="aboutTitle">About</div>
                        <div className="duration">
                            <p>{chosen.releaseDate}</p>
                            <p>{chosen.duration}</p>
                        </div>
                     <p>{chosen.info}</p>
                     </div>
                     <button onClick={()=> setClickState(true)}>Order</button>
                     <nav>
                         <Link to='/'>Back</Link>
                     </nav>
                 </div> 
        </div> 
     )
}else{
    return(
        <div className="bigContentContainer">
            <Picture data={chosen.url}/>
            <Form/>
        </div>
    )
}

}
export default More;