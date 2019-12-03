import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navb from './navb';

const menu=[{title:"Home"}, 
{title:"Services" , submenu:["For Entrepreneurs","For Students","For Hobbyistes"]},
 {title:"Contact"}]




function App() {
 
  return (
    <div className="App">
    <Navb menu={menu} />
  
    </div>
  );
}

export default App;
