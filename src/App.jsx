import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Login from "./pages/Login";
import LoginWall from "./components/LoginWall";
import Boton from "./components/Boton";
import Clock from "./pages/Clock";
import Home from "./pages/Home";
import List from "./pages/List";
import Add from "./pages/Add";
import ItemInfo from "./components/ItemInfo";
import useCount from "./hooks/useCount";
import useItems from "./hooks/useItems";
import useAuth from "./hooks/useAuth";

function App() {
  const { count, suma, resta } = useCount();
  const { isLogin, logout, login, token } = useAuth();
  const { addItem, delItem, getItems, items } = useItems(token);

  useEffect(() => {
    if (!isLogin) return;
    getItems();
  }, [isLogin, getItems]);

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
              element={<List items={items} ondelete={delItem} />}
            />

            <Route path="/add" element={<Add add={addItem} />} />

            <Route path="/items/:id" element={<ItemInfo items={items} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <h1>Contador: {count}</h1>
        <Boton name={"suma"} click={suma}></Boton>
        <Boton name={"resta"} click={resta}></Boton>
        <Boton name={"alert"} click={() => alert("hey")}></Boton>
      </div>
    </div>
  );
}

export default App;
