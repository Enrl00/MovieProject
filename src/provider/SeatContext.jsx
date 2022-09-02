import { createContext,useContext,useState } from "react";

const SeatContext = createContext();

export const SeatProvider =(props) => {
    const {children}=props;
    const [seatMovie, setSeatMovie]=useState( {} );
    return(
        <SeatContext.Provider value={{seatMovie, setSeatMovie}} >
            {children}
        </SeatContext.Provider>
    )
}
export const useSeatContext = () => useContext(SeatContext);