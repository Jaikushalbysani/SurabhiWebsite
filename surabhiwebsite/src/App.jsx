import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Login from './pages/Login';   
import Eventslist from './pages/Eventslist';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import Needs from './pages/Needs';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventslist" element={<Eventslist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/needs" element={<Needs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
