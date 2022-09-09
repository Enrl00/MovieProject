import { useMovieContext } from "../provider/MovieInfo"
import Picture from './picture'
import Title from './title'
import {Link } from "react-router-dom";
import '../styles/movies.css'
import { useUserContext } from "../provider/UserContext";
import {useSeatContext} from "../provider/SeatContext";
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
const styles = {
    button:{
        color:'#072B54',
        backgroundColor:'white',
        marginTop:'2vh',
        '&:hover':{
            backgroundColor:'#072B54',
            color:'white'
        }
    }
}

const Movies = () => {
    const { movieInfo,setChosen} = useMovieContext();
    const { userInfo,setUserInfo} = useUserContext();
    const {seatMovie, setSeatMovie} = useSeatContext();
    const OnClickFunction = (el, time) => {
        setChosen(el);
        setUserInfo({...userInfo, ticketHour: time, movieTitle: el.name})
        setSeatMovie({...seatMovie, ticketHour: time, movieTitle: el.name})
    }
    return (
        movieInfo.map(el => {

            return (
                <div style={{display:'flex', flexDirection:'row', border:'10px solid', borderColor:'inherit', marginRight:'20px'}}>
                    <div>
                        <Picture data={el.url} />
                        <Title data={el.name} />
                        <div>
                            <span style={{marginRight:'1vw'}}>{el.releaseDate}</span>
                            <span>{el.duration}</span>
                        </div>
                    </div>
                    <div className="textContainer">
                        <nav>
                            <div className="timeTable">
                                <Link style={{textDecoration:'none'}} onClick={() => OnClickFunction(el,"11:10")} to='/more'>
                                    <Button 
                                    variant="outlined"
                                    sx={styles.button}
                                    >11:10</Button>
                                </Link>
                                <Link style={{textDecoration:'none'}} onClick={() => OnClickFunction(el,"14:40")} to='/more'>
                                    <Button 
                                    variant="outlined"
                                    sx={styles.button}
                                    >14:40</Button>
                                </Link>
                                <Link style={{textDecoration:'none'}} onClick={() => OnClickFunction(el,"15:00")} to='/more'>
                                    <Button
                                     variant="outlined"
                                     sx={styles.button}
                                     >15:00</Button>
                                </Link>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            )
        })
    )
}
export default Movies;