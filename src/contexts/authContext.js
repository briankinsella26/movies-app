import React, { useState, createContext } from "react";
import fakeAuth from "../fakeAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const authenticate = async (username, password) => {
    const token = await fakeAuth(username, password);
    setToken(token);
    const origin = location.state?.intent?.pathname || "/";
    navigate(origin);
  };
  
  const logout = () => {
    console.log("set token to null")
    setToken(null);
    navigate('/')
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
