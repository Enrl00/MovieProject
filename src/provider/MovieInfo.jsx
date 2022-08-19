import { createContext, useContext, useState } from "react";
import movies from '../data/movies.json'

const MovieContext = createContext();

export const MovieProvider = (props) => {
    const {children} = props;
    const [movieInfo,setMovieInfo] = useState(movies);

    const [chosen, setChosen] = useState();

    return(
        <MovieContext.Provider value={{movieInfo,setMovieInfo, chosen, setChosen}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext)