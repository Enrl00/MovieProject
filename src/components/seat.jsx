import { useEffect, useState } from "react";
import { doc, getDoc,collection } from "firebase/firestore";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
import {useUserContext} from "../provider/UserContext"
import {useSeatContext} from "../provider/SeatContext"
import '../styles/seat.css'
const Seat = async () => {
    // const {seatMovie} = useSeatContext()
    const {userInfo,setUserInfo} = useUserContext();
    const [chosen, setChosen] = useState([]);
    const [seatInfo,setSeatInfo] = useState([])
    const handleOnChange = (index) => {
        setSeatInfo(seatInfo.map((el,ind)=> ind === index ? !el : el))
        setChosen([...chosen,index]); 
    }
    const clickHandle = async() => {
        setUserInfo({...userInfo, seat: chosen})

    }
    // useEffect(() => {
    //     const fetch = async() => {
    //         try{
    //             const docRef = collection(firestore, "seat");
    //             const docSnap = await getDoc(docRef);
    //             console.log(docSnap.data());
    //         } catch(err){
    //             console.log(err);
    //         }
    //     }
    //     fetch();
    // }, [])
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
