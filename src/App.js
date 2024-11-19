import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventsList from "./components/EventsList";
import EventDetail from "./components/EventDetail";
import Profile from "./components/Profile";
import About from "./components/About";  // Import the About component
import Event from "./components/Event";  // Import the Event component
import './components/styles/App.css'; // Global styles

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} /> {/* Add route for About page */}
          <Route path="/event" element={<Event />} /> {/* Add route for Event page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
