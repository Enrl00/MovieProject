import { Link } from "react-router-dom"
import { AppBar,Button } from "@mui/material"
import Movies from "./movies"

const Home = () => {
    return(
            <div className="mainBody">
                <AppBar>
                  <Button>Home</Button>
                  <Link to={'/about'}>
                    <Button>About</Button>
                  </Link>
                </AppBar>
                <Movies/>
            </div>
    )
}
export default Home;