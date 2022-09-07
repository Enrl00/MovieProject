import { useMovieContext } from "../provider/MovieInfo";
import { useState } from "react";
import {Link } from "react-router-dom";
import {Button} from "@mui/material";
import { ButtonGroup } from "@mui/material";
import Picture from "./picture";
import Form from './form'
import '../styles/more.css'
const styles = {
    button:{
        color:'#072B54',
        backgroundColor:'white',
        marginRight:'0.5vw',
        '&:hover':{
            backgroundColor:'#072B54',
            color:'white'
        }
    }}
const More = () => {
const {chosen} = useMovieContext();
const [click, setClickState] = useState(false);
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
                     <ButtonGroup>
                        <Button 
                           sx={styles.button}
                           onClick={()=> setClickState(true)}>Order</Button>
                        <nav>
                            <Link style={{textDecoration:'none'}} to='/'>
                               <Button sx={styles.button}>
                                Back
                               </Button>
                            </Link>
                        </nav>
                     </ButtonGroup>
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