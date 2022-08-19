import { useUserContext } from "../provider/UserContext";
import { Link } from "react-router-dom";
const Form = () => {
    const {userInfo, setUserInfo} =useUserContext();
    const Save = () => {
        document.getElementById('userForm').reset()
        console.log(userInfo);
    }

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.id]: event.target.value});
    }

    return(
        <div >
            <form id="userForm" style={{display:'flex', flexDirection:'column', width:'30vw'}}>
            <input type="text" id={"name"} placeholder="name" onChange={handleChange}></input>
            <input type="email" id={"email"} placeholder="email" onChange={handleChange}></input>
            <input  id={"phone"} placeholder="phone number" onChange={handleChange}></input>
            <label>Adults' Ticket</label>
            <input id={"adultTicket"} type="number" min="1" max="10" onChange={handleChange} />
            <label>Kids' Ticket</label>
            <input id={"kidsTicket"} type="number" min="1" max="10" onChange={handleChange} />
            </form>
           <Link to="/seat"> <button onClick={() => Save()}>Next</button></Link>
        </div>
    )
}
export default Form;