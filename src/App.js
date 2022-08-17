import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/home'
import About from './components/about'
import More from './components/more'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="more" element={<More/>}/>
      </Routes>
    </div>
  );
}

export default App;
