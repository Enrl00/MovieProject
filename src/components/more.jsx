import { useMovieContext } from "./movieInfo";
import { useState } from "react";
import {Link } from "react-router-dom";
import Picture from "./picture";
import Form from './form'
const More = () => {
const {chosen} = useMovieContext();
const [click, setClickState] = useState(false)
if(click === false){
    return(
        <div>
         <Picture data={chosen.url}/>
         
         <div>
                     <h1>{chosen.name}</h1>
                     <h2>On screeen</h2>
                     <p>{chosen.releaseDate}</p>
                     <h2>{chosen.duration}</h2>
                     <h2>About</h2>
                     <p>{chosen.info}</p>
                     <button onClick={()=> setClickState(true)}>Order</button>
                     <nav>
                         <Link to='/'>Back</Link>
                     </nav>
                 </div> 
        </div> 
     )
}else{
    return(
        <div>
            <Picture data={chosen.url}/>
            <Form/>
        </div>
    )
}

}
export default More;