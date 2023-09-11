import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import WebSites from './components/WebSites';

import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function handleClick(){
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>

      <div className="min-h-screen transition-all duration-500  dark:bg-sky-900">
            <Navigation darkModeHandling = {handleClick} />
            <Home />
            <Services />
            <WebSites />
      </div>
      
    </div>
  );
}

export default App;
