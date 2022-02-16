import React, {useState} from "react";
import { createContext } from "react";

const UserContext = createContext({});
const UserProvider = ({children}) =>{

    const [userData, setUserData] = useState(null);
    
    return(
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )

}

export const useGlobalContext =()=>{
    return useGlobalContext(UserContext);
}

export {UserProvider,UserContext};