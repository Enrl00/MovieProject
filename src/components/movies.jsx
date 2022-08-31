import { useMovieContext } from "../provider/MovieInfo"
import Picture from './picture'
import Title from './title'
import {Link } from "react-router-dom";
import '../styles/movies.css'
import { useUserContext } from "../provider/UserContext";
import {useSeatContext} from "../provider/SeatContext";
import { firestore } from "../firebase";
import{addDoc,collection} from "@firebase/firestore"
import { useEffect } from "react";
const Movies = () => {
    const { movieInfo,setChosen} = useMovieContext();
    const { userInfo,setUserInfo} = useUserContext();
    const {seatMovie, setSeatMovie,seatInfo} = useSeatContext();
    useEffect(async() =>{
        movieInfo.map(el => {
            
        })
    },[movieInfo])
    const OnClickFunction = (el, time) => {
        setChosen(el);
        setUserInfo({...userInfo, ticketHour: time, movieTitle: el.name})
        setSeatMovie({...seatMovie, ticketHour: time, movieTitle: el.name})
    }
    return (
        movieInfo.map(el => {

            return (
                <div style={{display:'flex', flexDirection:'row', border:'8px solid #072B54', marginRight:'20px'}}>
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
                                <button><Link onClick={() => OnClickFunction(el,"11:10")} to='/more'>11:10</Link></button>
                                <button><Link onClick={() => OnClickFunction(el,"14:40")} to='/more'>14:40</Link></button>
                                <button><Link onClick={() => OnClickFunction(el,"15:00")} to='/more'>15:00</Link></button>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            )
        })
    )
}
export default Movies;