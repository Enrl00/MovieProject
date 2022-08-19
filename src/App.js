import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/home'
import About from './components/about'
import More from './components/more'
import Seat from "./components/seat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="more" element={<More/>}/>
        <Route path="seat" element={<Seat/>}/>
      </Routes>
    </div>
  );
}

export default App;
