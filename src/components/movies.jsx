import { useMovieContext } from "./movieInfo"
import Picture from './picture'
import Title from './title'
import {Link } from "react-router-dom";
const Movies = () => {
    const { movieInfo,setChosen} = useMovieContext()
    return (
        movieInfo.map(el => {
            return (
                <div>
                    <Picture data={el.url} />
                    <Title data={el.name} />
                    <div>
                        <span>{el.releaseDate}</span>
                        <span>{el.duration}</span>
                        <nav>
                            <Link onClick={() => setChosen(el)} to='/more'>More</Link>
                        </nav>
                    </div>
                </div>
            )
        })
    )
}
export default Movies;