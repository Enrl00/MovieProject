import { useUserContext } from "../provider/UserContext";
import { Link } from "react-router-dom";
import {Button, Input} from "@mui/material"
const styles = {
    button:{
        color:'#072B54',
        backgroundColor:'white',
        marginTop:'2vh',
        '&:hover':{
            backgroundColor:'#072B54',
            color:'white'
        }
    }}
const Form = () => {
    const {userInfo, setUserInfo} =useUserContext();
    const Save = () => {
        document.getElementById('userForm').reset()
    }

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.id]: event.target.value});
    }

    return(
        <div >
            <form id="userForm" style={{display:'flex', flexDirection:'column', width:'30vw'}}>
                <label>Name</label>
                <Input type="text" id={"name"} placeholder="name" onChange={handleChange}></Input>
                <label>Email</label>
                <Input type="email" id={"email"} placeholder="email" onChange={handleChange}></Input>
                <label>Phone Number</label>
                <Input  id={"phone"} placeholder="phone number" onChange={handleChange}></Input>
                <label>Adults' Ticket</label>
                <Input id={"adultTicket"} type="number" min="1" max="10" onChange={handleChange} />
                <label>Kids' Ticket</label>
                <Input id={"kidsTicket"} type="number" min="1" max="10" onChange={handleChange} />
            </form>
           <Link style={{textDecoration:'none'}} to="/seat">
             <Button
                sx={styles.button} 
                onClick={() => Save()}>Next</Button>
           </Link>
        </div>
    )
}
export default Form;