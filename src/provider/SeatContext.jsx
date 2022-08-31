import { createContext,useContext,useState } from "react";

const SeatContext = createContext();

export const SeatProvider =(props) => {
    const {children}=props;
    const [seatInfo, setSeatInfo]=useState( new Array(100).fill(false));
    const [seatMovie, setSeatMovie] = useState('')
    return(
        <SeatContext.Provider value={{seatInfo, setSeatInfo, seatMovie, setSeatMovie}} >
            {children}
        </SeatContext.Provider>
    )
}
export const useSeatContext = () => useContext(SeatContext);