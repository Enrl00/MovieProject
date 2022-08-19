import { useMovieContext } from "./movieInfo"
import Picture from './picture'
import Title from './title'
import {Link } from "react-router-dom";
const Movies = () => {
    const { movieInfo,setChosen} = useMovieContext()
    return (
        movieInfo.map(el => {
            return (
                <div style={{display:'flex', flexDirection:'row', border:'8px solid #072B54', marginRight:'20px'}}>
                    <div>
                        <Picture data={el.url} />
                        <Title data={el.name} />
                        <span style={{marginRight:'1vw'}}>{el.releaseDate}</span>
                        <span>{el.duration}</span>
                    </div>
                    <div className="textContainer">
                        <nav>
                            <div className="timeTable">
                                <button><Link onClick={() => setChosen(el)} to='/more'>11:10</Link></button>
                                <button><Link onClick={() => setChosen(el)} to='/more'>14:40</Link></button>
                                <button><Link onClick={() => setChosen(el)} to='/more'>15:00</Link></button>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            )
        })
    )
}
export default Movies;