import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(false);

  const login = async (user) => {
    try {
      const result = await fetch(API_URL + "/login/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await result.json();
      setIsLogin(data.isLogin);
      setToken(data.token);
      return data.isLogin;
    } catch (e) {
      console.error("Login error:", e);
      setIsLogin(false);
      return false;
    }
  };

  const logout = () => {
    setIsLogin(false);
  };

  return { isLogin, login, logout, token };
};

export default useAuth;
