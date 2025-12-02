import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AppProvider = ({children}) => {
const [isAuthanticated, setIsAuthanticated] = useState(false);
const login = () => setIsAuthanticated(true);
const logout = () => setIsAuthanticated(false);
return(
    <>
    <AuthContext.Provider value={{isAuthanticated, login, logout}}>
      {children}
    </AuthContext.Provider>
    </>
)
}
