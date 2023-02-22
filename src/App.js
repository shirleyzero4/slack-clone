import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world (●'◡'●)</h1>
      <Header />
      <div className='app-body'>
          {/* Sidebar */}
          <Sidebar />
          {/* React-Router: Chat Screen */}
      </div>
    </div>
  );
}

export default App;
