import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import FirstComponent from './Components/FirstComponent/FirstComponent';
import SecondComponent from './Components/SecondComponent/SecondComponent';

export const CountContext = createContext();


function App() {
  const [count, setCount]= useState(0);
  return (
    <CountContext.Provider value={[count, setCount]}>
      <div className="App">
        <h1>HomeCount:  {count}</h1>

        <button onClick={()=> setCount(count +1)}>Increase</button>
        <button onClick={()=> setCount(count -1)}>Decrease</button>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
       
      </div>
    </CountContext.Provider>
    
  );
}

export default App;
