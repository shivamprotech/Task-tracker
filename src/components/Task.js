import { FaTimes } from 'react-icons/fa';


function Task( {task, onDelete, onToggleReminder} ) {
    return (
       ( task
        ? <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggleReminder(task.id)}>
           <h4>{task.title}</h4>
           <p className="truncate">{task.body}</p>
           <FaTimes style={{color: "red", float: "right"}} onClick={() => onDelete(task.id)}/>
            </div>
        : null)
    )
}

export default Task
