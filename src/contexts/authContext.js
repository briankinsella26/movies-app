import React, { useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fakeAuth from "../fakeAuth.js"

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const users = [
    {
      username: "user1@test.com",
      password: "password"
    },
    {
      username: "user2@test.com",
      password: "password"
    }
  ];

  const authenticate = async (username, password) => {
    const token = await fakeAuth(username, password);
    const user = users.find((user) => user.username === username);
    if(user){
      if(user.password === password) {
        setToken(token);
        const origin = location.state?.intent?.pathname || "/";
        navigate(origin);
      } else {
        console.log("error with password")
      }
    } else {
      console.log("error with login")
    }
  };
  
  const logout = () => {
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
