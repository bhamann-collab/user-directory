import React, {useState} from 'react';
import './App.css';
import Employee from './components/Employee'
import Filter from './components/Filter'

let employeesData = [
    {
        name: 'Matt',
        occupation: 'Engineering'
    },
    {
        name: 'Nathan',
        occupation: 'Accounting'
    },
    {
        name: 'Dean',
        occupation: 'Engineering'
    },
    {
        name: 'Jacob',
        occupation: 'Marketing'
    },
    {
        name: 'Jessie',
        occupation: 'Accounting'
    },
    {
        name: 'Dave',
        occupation: 'Engineering'
    },
    {
        name: 'Fergus',
        occupation: 'Engineering'
    },
    {
        name: 'Hadley',
        occupation: 'Human Resources'
    },
    {
        name: 'Jayda',
        occupation: 'Counselor'
    },
    {
        name: 'Delilah',
        occupation: 'Manager'
    },
    {
        name: 'Kathleen',
        occupation: 'Sales'
    },
    {
        name: 'Karly',
        occupation: 'Marketing'
    }
]

function App() {
    const[employees, setEmployees] = useState(employeesData)

    function ascendNames() {
        setEmployees([...employees].sort((a, b) => a.name.localeCompare(b.name)))
    }

    function descendNames() {
        employees.sort((a, b) => b.name.localeCompare(a.name))
    }

    const listItems = employees.map((employee) => 
            <>
                <Employee
                    name={employee.name}
                    occupation={employee.occupation}
                />
            </>
    )

    return (
        <div className="App">
             <Filter 
                ascendNames={ascendNames}
                decendNames={descendNames}
             />
            <ul>{listItems}</ul>
        </div>
    );
}

export default App;
