// App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Attractions from './components/Attractions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <About />
        <Attractions />
      </header>
    </div>
  );
}

export default App;
