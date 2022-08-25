import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeatContext } from "../provider/SeatContext";
import {useUserContext} from "../provider/UserContext"
const Seat = () => {
    const {seatInfo} = useSeatContext();
    const {userInfo,setUserInfo} = useUserContext();
    const [chosen, setChosen] = useState([]);
    const handleOnChange = (index) => {
        setChosen([...chosen,index]); 
    }
    const clickHandle = async() => {
        setUserInfo({...userInfo, seat: chosen})
    }
    return(
            <>
           { seatInfo.map((el,index) => <input type={"checkbox"} value={el} onChange={() =>handleOnChange(index)}/>
            )}
            <button><Link to='/orderInfo' onClick={() =>clickHandle()}>Final</Link></button>
            </>
    )
}
export default Seat;
