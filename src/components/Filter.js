import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Filter = (props) => {
    return (
        <div>
            <Form className="filterForm">
                <Form.Group controlId="formBasicEmail" className="formOccupation">
                    <Form.Label>Filter Occupation</Form.Label>
                    <Form.Control placeholder="Occupation" />
                </Form.Group>

                <Button variant="primary" onClick={props.ascendNames}>
                    Sort Names Ascending
                </Button>
                <Button variant="primary" onClick={props.decendNames}>
                    Sort Names Decending
                </Button>
            </Form>
        </div>
    )
}

export default Filter
