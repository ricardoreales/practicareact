import React from 'react'
import './App.css';
import Encabezado from './components/Encabezado/Encabezado';
import Item from './components/Item/Item';
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
      <Encabezado />
      <NavBar />
      <Item />
    </div>
  );
}

export default App;