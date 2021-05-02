import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from './UI/Button';
import { useDispatch } from 'react-redux';


function TaskForm({data, action, handleClose, showTask}) {
    const [id, setId] = useState(data ? data.id: Math.round(Math.random() * 1000))
    const [title, setTitle] = useState(data ? data.title : "");
    const [body, setBody] = useState(data ? data.body : "");
    const [datetime, setDateTime] = useState(data ? data.datetime : "");
    const [reminder, setReminder] = useState(data ? data.reminder : false);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
      
        if (action === "update") {
          dispatch({type: "UPDATE_TASK", payload: {id, title, body, datetime, reminder}})
          handleClose();
        } else {
          dispatch({type: "ADD_TASK", payload: {id, title, body, datetime, reminder}});
        }

        setTitle("")
        setBody("")
        setDateTime("")
        setReminder(false)
    }

    return (
        <>
            {showTask ?
                (<>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="text"
                        placeholder="Enter Task"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                      </Form.Group>
                  
                      <Form.Group as={Col}>
                        <Form.Label>Body</Form.Label>
                        <Form.Control type="text"
                        placeholder="Enter text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)} />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Day & Time</Form.Label>
                      <Form.Control type="datetime-local"
                      value={datetime} 
                      onChange={(e) => setDateTime(e.target.value)}/>
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox"
                        label="Set Reminder"
                        value={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}/>
                    </Form.Group>

                    <Button title={"Save Task"} type="submit" />
                  </Form> 
                </>)
                : null
            }
            </>
    )
}

export default TaskForm
