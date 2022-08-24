import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeatContext } from "../provider/SeatContext";
import {useUserContext} from "../provider/UserContext"
const Seat = () => {
    const {seatInfo, setSeatInfo} = useSeatContext();
    const {userInfo,setUserInfo} = useUserContext();
    const [chosen, setChosen] = useState([]);
    const handleOnChange = (index) => {
        setChosen([...chosen,index]); 
    }
    console.log(chosen)
    const clickHandle = async() => {
        // chosen -> firebase deer baiga 
        // setSeatInfo( seatInfo.map((el2, ind) => {
        //     if(chosen.includes(ind)){
        //         el2 = !el2;
        //         setUserInfo({...userInfo, seat: chosen})
        //     }
        // }))

        console.log(userInfo);
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
