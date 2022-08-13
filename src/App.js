import React from "react"
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Index from './Components/Index'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={  <Home/>} />
        <Route path='/transactions' element={<Index/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
