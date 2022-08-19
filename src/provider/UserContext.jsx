import { createContext,useContext,useState } from "react";

const UserContext = createContext();

export const UserProvider =(props) => {
    const {children}=props;
    const [userInfo, setUserInfo]=useState( {} );
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}} >
            {children}
        </UserContext.Provider>
    )
}
export const useUserContext = () => useContext(UserContext);