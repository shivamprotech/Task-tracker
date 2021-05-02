import { useState } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

// React Bootstrap Class
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  const [showTask, setshowTask] = useState(false)

  const showTaskForm = () => {
    setshowTask(!showTask)
  }

  return (
    <Provider store={store}>
      <Container className={'container'}>
        <Row>
          <Col>
            <Header title={"Task Tracker"} showTask={showTask} showTaskForm={showTaskForm} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <TaskForm showTask={showTask}/>
            {/* <TaskForm /> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <Tasks />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
