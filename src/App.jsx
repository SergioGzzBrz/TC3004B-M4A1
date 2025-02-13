import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Boton from './components/Boton';
import List from './components/List';
import Add from './components/Add';

function App() {
  const tempItems = [
    { id: 1, name: "item1", price: 1},
    { id: 2, name: "item2", price: 2},
    { id: 3, name: "item3", price: 3},
  ]
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(tempItems);

  const sum = () => {
    setCount(count + 1)
  }

  const resta = () => {
    setCount(count - 1)
  }

  const add = (item) => {
    item.id = items.length + 1
    item.price = item.id
    setItems(...items, item)
  };

  return (
    <div>
      <Header/>
      
      <p>Count is {count}</p> 
      
      <Boton name={"Suma"} click={sum}></Boton>
      <Boton name={"Resta"} click={resta}></Boton>
      <Boton name={"Mensaje"} click={() => {alert("hola")}}></Boton>

      <List items={items}/>

      <Add add={add}/>

      <Footer/>
    </div>
  );
}

export default App;
