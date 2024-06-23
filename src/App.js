import React from 'react';
import './App.css';
import LoginForm from './Login';
import Navigation from './Nav';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;