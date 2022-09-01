import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
import {useUserContext} from "../provider/UserContext"
import '../styles/seat.css'
const Seat = () => {

    const docRef = doc(firestore, "seat", seatMovie);
    const docSnap = await getDoc(docRef);
    const {userInfo,setUserInfo} = useUserContext();
    const [chosen, setChosen] = useState([]);
    const [seatInfo,setSeatInfo] = useState(docSnap.data())
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
