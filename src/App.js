import React from 'react';
import './App.css';
import Employee from './components/Employee'

function App() {
    const names = ['Matt', 'Nathan', 'Jones']
    const listItems = names.map((name) => 
        <li>{name}</li>
    )

    return (
        <div className="App">
            <ul>{listItems}</ul>
        </div>
    );
}

export default App;
