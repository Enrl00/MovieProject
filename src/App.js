import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/home'
import About from './components/about'
import More from './components/more'
import Seat from "./components/seat";
import './firebase'
import OrderInfo from "./components/orderInfo";
import {AppBar, Button} from "@mui/material"

function App() {
  return (
    <div>
      <AppBar>
        <Button>Home</Button>
        <Button>About</Button>
      </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="more" element={<More/>}/>
          <Route path="seat" element={<Seat/>}/>
          <Route path="orderInfo" element={<OrderInfo/>}/>
        </Routes>
    </div>
  );
}

export default App;
