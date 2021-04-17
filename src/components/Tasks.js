import propTypes from 'prop-types';
import Task from './Task';

function Tasks({ tasks, onDelete, onToggleReminder }) {
    return (
        <>
        {tasks.length ? tasks.map((task) =>
          <Task key={task.id} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder}/>
        ) : <h4 style={{textAlign: "center"}}>There is no Task</h4>}
        </>
    )
}

Tasks.defaultProps = {
    tasks: [],
}

Tasks.propTypes = {
    tasks: propTypes.array,
    onDelete: propTypes.func,
}

export default Tasks
