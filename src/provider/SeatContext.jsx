import { createContext,useContext,useState } from "react";

const SeatContext = createContext();

export const SeatProvider =(props) => {
    const {children}=props;
    const [seatInfo, setSeatInfo]=useState( new Array(12).fill(false));
    return(
        <SeatContext.Provider value={{seatInfo, setSeatInfo}} >
            {children}
        </SeatContext.Provider>
    )
}
export const useSeatContext = () => useContext(SeatContext);