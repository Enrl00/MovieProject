import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeatContext } from "../provider/SeatContext";
import {useUserContext} from "../provider/UserContext"
import '../styles/seat.css'
const Seat = () => {
    const {seatInfo, setSeatInfo} = useSeatContext();
    const {userInfo,setUserInfo} = useUserContext();
    const [chosen, setChosen] = useState([]);
    const handleOnChange = (index) => {
        setSeatInfo(seatInfo.map((el,ind)=> ind === index ? !el : el))
        setChosen([...chosen,index]); 
    }
    const clickHandle = async() => {
        setUserInfo({...userInfo, seat: chosen})

    }
    console.log(seatInfo);
    return(
        <div className="mainContainer">
            <div className="screen"></div>
            <div className="seat">
             {seatInfo.map((el,index) => <input className="seatInput" type={"checkbox"} value={el} onChange={() =>handleOnChange(index)}/>)}
            </div>
            <button><Link to='/orderInfo' onClick={() =>clickHandle()}>Final</Link></button>
        </div>
    )
}
export default Seat;
