import React,{ useState}from "react"; 
// import { Link } from "react-router-dom";
const Form = () => {
    const [userInfo,setState] =useState({})
    const Save = () => {
        console.log(userInfo);
        setState({})
    }

    const handleChange = (event) => {
        setState({...userInfo, [event.target.id]: event.target.value});
    }


    return(
        <div style={{display:'flex', flexDirection:'column', width:'30vw'}}>
            <input type="text" id={"name"} placeholder="name" onChange={handleChange}></input>
            <input type="email" id={"email"} placeholder="email" onChange={handleChange}></input>
            <input type="number" id={"phone"} placeholder="phone number" onChange={handleChange}></input>
            
            <button onClick={() => Save()}></button>
        </div>
    )
}
export default Form;