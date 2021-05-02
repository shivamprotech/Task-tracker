import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FaTimes, FaEllipsisV } from 'react-icons/fa';
import {ListGroup} from 'react-bootstrap';
import {Col, Row} from 'react-bootstrap';
import ShowModal from './UI/Modal/ShowModal';
import TaskForm from '../components/TaskForm';


function Task( {task} ) {
    const [showModal, setShowModal] = useState(false)
    // const showTask = useSelector(state => state.showTask)
    const dispatch = useDispatch()

    const updateForm = (task) => {
        return <TaskForm data={task} action="update" handleClose={handleClose} showTask={true}/>
    };
    
    const handleShow = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const deleteTask = (id) => {
        return dispatch({type: "DELETE_TASK", payload: id})
    }

    const toggleReminder = (id) => {
        return dispatch({type: "TOGGLE_REMINDER", payload: id})
    }

    return (
        <div>
            <ListGroup as="ul"> 
            {task ?
                    (<>
                        <ListGroup.Item as="li" 
                        onDoubleClick={() => toggleReminder(task.id)}
                        className={`task ${task.reminder ? 'reminder' : ''}`}>
                            <Row>
                                <Col md={11}>
                                    <h6><b>{task.title}</b></h6>
                                    <p>{task.body}</p>
                                </Col>
                                <Col md={1} className={"align-self-center"}>
                                    <FaTimes style={{color: "red", float:"right"}} onClick={() => deleteTask(task.id)}/>
                                    <FaEllipsisV onClick={() => setShowModal(true)}/>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </>)
                    : null}
                    <ShowModal dataToShow={updateForm(task)} show={showModal} handleShow={handleShow} handleClose={handleClose}/>
            </ListGroup>
        </div>
    )
}

export default Task
