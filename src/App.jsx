import { useState } from 'react';
import './App.scss';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
  const [showPage, setShowPage] =  useState("about")

  

  return (
    <div className="App">
      {showPage === "home" && <Home setShowPage={setShowPage}/>}
      {showPage === "about" && <About setShowPage={setShowPage}/>}
      {showPage === "projects" && <Projects setShowPage={setShowPage}/>}
    </div>
  );
}

export default App;
