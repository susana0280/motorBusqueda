import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from '../src/pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  SearchPage from './pages/SearchPage'



function App() {
  return (
    <div className="App">

    <Router>
    <Routes>
     
    <Route path='/' element={<Home/>}  />
       
      
    <Route path='/search' element={ <SearchPage/>}/>
 
  

    </Routes>
    </Router>  
    </div>
  );
}

export default App;
