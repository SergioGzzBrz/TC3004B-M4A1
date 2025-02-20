import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './pages/Login'
import LoginWall from './components/LoginWall';
import Clock from './pages/Clock';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "item1", price: 1},
    { id: 2, name: "item2", price: 2},
    { id: 3, name: "item3", price: 3},
  ]);
  const [loggedIn, setloggedIn] = useState(false)

  const sum = () => {
    setCount(count + 1)
  }

  const resta = () => {
    setCount(count - 1)
  }

  const add = (item) => {
    item.id = items.length + 1
    setItems([...items, item])
  };

  const del = (id) => {
    setItems(items.filter((item) => {
      return item.id !== id
    }))
  }

  const loginFunc = ({username, password}) => {
    if (username === "123" && password === "123") {
      setloggedIn(true)
      return true
    }
    return false
  }

  const logout = () => {
    setloggedIn(false)
  }

  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar logout={logout}/>
        <Routes>
          <Route 
            path='/login' 
            element={
                <Login loginFunc={loginFunc}/>
            }
          />
          <Route element={<LoginWall loggedIn={loggedIn} redirectTo="/login"/>}>
            <Route 
              path='/' 
              element={
                <Home/>
              }
            />

            <Route 
              path='/reloj' 
              element={
                <Clock/>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
