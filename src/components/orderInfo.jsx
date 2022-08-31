import { useSeatContext } from "../provider/SeatContext";
import { useMovieContext } from "../provider/MovieInfo";
import {useUserContext} from "../provider/UserContext"
import{addDoc,collection,setDoc,doc} from "@firebase/firestore";
import { firestore } from "../firebase";
import Picture from "./picture";
import '../styles/orderInfo.css'

const OrderInfo =  () => {
    const {userInfo} = useUserContext();
    const {chosen} = useMovieContext();
    const {seatInfo,seatMovie} =useSeatContext();
    const fireBase = async () => {
        const docRef = await addDoc(collection(firestore, "order"), {
            userInfo
        });
        try{
            setDoc(doc(firestore, "seat",seatMovie.movieTitle),{ seatInfo })
        }catch(error){
            console.log(error);
        }
        alert('thank you! your order has been registered')
    }
    console.log(seatInfo);
    return(
        <div className="order">
            <Picture data={chosen.url}/>
            <div>
                <div>Movie: {userInfo.movieTitle}</div>
                <div>Name: {userInfo.name}</div>
                <div>Email: {userInfo.email}</div>
                <div>Phone Number: {userInfo.phone}</div>
                <div>Adult: {userInfo.adultTicket}</div>
                <div>Kids: {userInfo.kidsTicket}</div>
                <div>Seat: {userInfo.seat}</div>
                <div>Time: {userInfo.ticketHour}</div>
                <button onClick={() => fireBase()}>check</button>
            </div>
        </div>
    )
}
export default OrderInfo;