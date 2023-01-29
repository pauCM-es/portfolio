import { useState } from 'react';
import './App.scss';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
  const [showPage, setShowPage] =  useState("profile")

  return (
    <div className="app">
      {showPage === "home" && <Home setShowPage={setShowPage}/>}
      {showPage === "profile" && <Profile setShowPage={setShowPage}/>}
      {showPage === "projects" && <Projects setShowPage={setShowPage}/>}
    </div>
  );
}

export default App;
