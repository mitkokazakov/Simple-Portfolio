import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div >

      <div className="min-h-screen transition-all duration-500  dark:bg-sky-900">
            <Navigation />
            <Home />
      </div>
      
    </div>
  );
}

export default App;
