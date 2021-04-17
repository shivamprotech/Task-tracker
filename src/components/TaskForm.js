import React from 'react'
import {useState} from 'react';


function TaskForm({onAdd, showTask}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [datetime, setDateTime] = useState("");
    const [reminder, setReminder] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        onAdd({title, body, datetime, reminder})

        setTitle("")
        setBody("")
        setDateTime("")
        setReminder(false)
    }

    return (
    (showTask ?
        <form className='add-form' onSubmit={(e) => handleSubmit(e)}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" value={title} 
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Body</label>
            <textarea type="text" value={body}
            onChange={(e) => setBody(e.target.value)}>
            </textarea>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type="datetime-local" value={datetime} 
            onChange={(e) => setDateTime(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
        </form> :
        null
    )
    )
}

export default TaskForm
