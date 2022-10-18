import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import {originals, action} from './urls';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  )
}

export default App