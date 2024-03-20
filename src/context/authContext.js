"use client"
import { createContext, useContext,  useState } from 'react';

const AuthContext=createContext();

export const AuthProvider=({children})=>{
      const [userAuth,setUserAuth]=useState(null);
     
      const login = (userdata) => {
        setUserAuth(userdata);
        localStorage.setItem('user',JSON.stringify(userdata));
      };
      const logout = () => {
        setUserAuth(null);
        localStorage.removeItem('user');
      };
      

      return(
        <AuthContext.Provider value={{login,logout,userAuth}}>
          {children}
        </AuthContext.Provider>
      )
}

export const useAuth=()=>useContext(AuthContext);