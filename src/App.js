import React, {useState} from 'react';
import './App.css';
import NavBar from './Componenets/navBar';
import Infopanel from './Componenets/infopanel';
import FootNav from './Componenets/footNav';

function App() {
  const screenConfig = useState(0);
  return (
    <div >
    <NavBar />
    <Infopanel currentScreen={screenConfig[0]}/> 
    <FootNav screenConfig = {screenConfig} />
    </div>
  );
}

export default App;
