import React from 'react';
import { useDispatch } from 'react-redux';
import {increment} from './features/counter/counterSlice';
import './App.css';
import Navigator from './components/Navigator'

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Navigator/>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
