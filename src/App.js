import React from 'react';
import './App.css';
import Employee from './components/Employee'

function App() {
  return (
    <div className="App">
      <Employee name={`Matt`}/>
      <Employee name={`Nathan`}/>
      <Employee name={`Jones`}/>
    </div>
  );
}

export default App;
