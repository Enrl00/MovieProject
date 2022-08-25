import {useUserContext} from "../provider/UserContext"
import{addDoc, collection} from "@firebase/firestore"
import { firestore } from "../firebase";

const OrderInfo =  () => {
    const {userInfo} = useUserContext()
    const fireBase = async () => {
        const docRef = await addDoc(collection(firestore, "order"), {
            userInfo
        });
    }
    
    return(
        <div>
            <div>Name: {userInfo.name}</div>
            <div>Email: {userInfo.email}</div>
            <div>Phone Number: {userInfo.phone}</div>
            <div>Adult: {userInfo.adultTicket}</div>
            <div>Kids: {userInfo.kidsTicket}</div>
            <div>Seat: {userInfo.seat}</div>
            <button onClick={() => fireBase()}>check</button>
        </div>
    )
}
export default OrderInfo;