import { useState } from "react";
import { useSeatContext } from "../provider/SeatContext";
// import {useUserContext} from "../provider/UserContext"
const Seat = () => {
    const {seatInfo, setSeatInfo} = useSeatContext();
    // const {userInfo} = useUserContext();
    const [chosen, setChosen] = useState([]);
    console.log(seatInfo);
    return(
            <>
           { seatInfo.map((el, index) => {
            return <input type="checkbox" onChange={() => setChosen([...chosen,index]) } />
            })}
            <button onClick={() => setSeatInfo( seatInfo.map((el2, ind) => chosen.includes(ind)? !el2 : el2) )}>final</button>
            </>
    )
}
export default Seat;
