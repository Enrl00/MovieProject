import { Link } from "react-router-dom"
import Movies from "./movies"

const Home = () => {
    return(
        <nav>
            <Link to='/about'>About</Link>
            <Movies/>
        </nav>
    )
}
export default Home;