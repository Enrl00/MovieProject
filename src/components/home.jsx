import { Link } from "react-router-dom"
import Movies from "./movies"

const Home = () => {
    return(
        <div>
            <div className="header">
                <nav>
                    <Link to='/about'>About</Link>
                </nav>
            </div>
            <div className="mainBody">
                <Movies/>
            </div>
        </div>
    )
}
export default Home;