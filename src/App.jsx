import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Boton from './components/Boton';
import List from './components/List';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import CredentialsSignInPage from './components/SignInPage'

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "item1", price: 1},
    { id: 2, name: "item2", price: 2},
    { id: 3, name: "item3", price: 3},
  ]);

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

  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar/>
        <Header/>
        <Routes>
          <Route path='/' element={<CredentialsSignInPage/>}/>
          <Route path='/add' element={<Add add={add}/>}/>
          <Route 
            path='/items' 
            element={<List items={items} ondelete={del}/>}
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      <p>Count is {count}</p> 
      
      {/* <Boton name={"Suma"} click={sum}></Boton>
      <Boton name={"Resta"} click={resta}></Boton>
      <Boton name={"Mensaje"} click={() => {alert("hola")}}></Boton> */}



      

    </div>
  );
}

export default App;
