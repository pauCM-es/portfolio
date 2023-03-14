import { useState } from 'react';
import './App.scss';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
  const [showPage, setShowPage] =  useState("home")

  const delayShowPage = async (showPage, time, event) => {
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );
    await delay(time);
    setShowPage(showPage)
  };

  return (
    <div className="app">
      {showPage === "home" && <Home delayShowPage={delayShowPage}/>}
      {showPage === "profile" && <Profile delayShowPage={delayShowPage}/>}
      {showPage === "projects" && <Projects delayShowPage={delayShowPage}/>}
    </div>
  );
}

export default App;
