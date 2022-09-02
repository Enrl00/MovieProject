import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
import {useUserContext} from "../provider/UserContext"
import '../styles/seat.css'
import { useSeatContext } from "../provider/SeatContext";
const Seat = () => {
    const {userInfo,setUserInfo} = useUserContext();
    const {seatMovie,seatInfo,setSeatInfo} = useSeatContext();
    const [chosen, setChosen] = useState([]);
    const handleOnChange = (index) => {
        setSeatInfo(seatInfo.map((el,ind)=> ind === index ? !el : el))
        setChosen([...chosen,index]); 
    }
    const clickHandle = () => {
        setUserInfo({...userInfo, seat: chosen})
    }
    useEffect(() => {
        const fetch = async() => {
            try{
                const docRef = doc(firestore, "seat", seatMovie.movieTitle+seatMovie.ticketHour);
                const docSnap = await getDoc(docRef);
                setSeatInfo(docSnap.data().seatInfo)
            } catch(err) {
                console.log(err);
            }
        }
        fetch();
    }, []);
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
