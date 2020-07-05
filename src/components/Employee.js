import React from 'react'

const Employee = (props) => {
    return (
        <div>
            <h1><span>{props.name}</span> <span>{props.occupation}</span></h1>
        </div>
    )
}

export default Employee
