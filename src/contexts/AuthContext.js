import React , {useContext,useState} from "react"
import { auth } from "../Firebase"
const AuthContext = React.createContext()
export function useAuth(){
return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState()

function Signup(email , password){
   return auth.createUserWithEmailAndPassword(email , password)
}

    const value = {
        currentUser
    }
    return(
        <>
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
        </>
    )
}