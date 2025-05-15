import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Login from "./pages/Login";
import LoginWall from "./components/LoginWall";
import Clock from "./pages/Clock";
import Home from "./pages/Home";
import List from "./pages/List";
import Add from "./pages/Add";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (!isLogin) return;
    getItems();
  }, [isLogin]);
  const API_URL = process.env.REACT_APP_API_URL;
  console.log("API URL:", API_URL);

  const getItems = async () => {
    try {
      const result = await fetch(API_URL + "/items/", {
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
      });
      const data = await result.json();
      console.log(data);
      setItems(data);
    } catch (e) {
      console.error("Error in get items: ", e);
    }
  };

  const sum = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
  };

  const add = async (item) => {
    try {
      const result = await fetch(API_URL + "/items/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(item),
      });

      const data = await result.json();

      setItems([...items, ...data.inserted_items]);
    } catch (e) {
      console.error("Error in add item:", e);
    }
  };

  const del = async (id) => {
    try {
      const result = await fetch(API_URL + "/items/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
      });
      setItems(items.filter((item) => item.id !== id));
    } catch (e) {
      console.error("Error in delete item:", e);
    }
  };

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

  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar logout={logout} />
        <Routes>
          <Route path="/login" element={<Login loginFunc={login} />} />
          <Route element={<LoginWall isLogin={isLogin} redirectTo="/login" />}>
            <Route path="/" element={<Home />} />

            <Route path="/reloj" element={<Clock />} />

            <Route
              path="/items"
              element={<List items={items} ondelete={del} />}
            />

            <Route path="/add" element={<Add add={add} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
