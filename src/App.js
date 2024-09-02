// import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import { createContext, useState } from 'react';


export const context=createContext()
function App() {
  const [data,setdata]=useState([])
  const main="rajeswari"
  return (
    <context.Provider value={main}>
    <div className="App">
      <h1>welcome to context api....</h1>
      <Table></Table>
      <Filter></Filter>
    </div>
    </context.Provider>
  );
}

export default App;
