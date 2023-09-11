import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import WebSites from './components/WebSites';

function App() {
  return (
    <div >

      <div className="min-h-screen transition-all duration-500  dark:bg-sky-900">
            <Navigation />
            <Home />
            <Services />
            <WebSites />
      </div>
      
    </div>
  );
}

export default App;
