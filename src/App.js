import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "reminder": true,
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      "reminder": true,
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "reminder": false,
    },
    {
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "reminder": false,
    },
    {
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "reminder": false,
    },
  ])
  const [showTask, setShowTask] = useState(false)

  const showTaskForm = () => {
    setShowTask(!showTask)
  }

  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task));
  }

  const addTask = (task) => {
      const id = Math.random() * 1000;
      const newTask = {id, ...task}

      setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title={"Task Tracker"} showTaskForm={showTaskForm} showTask={showTask}/>
      <TaskForm onAdd={addTask} showTask={showTask}/>
      <Tasks tasks={tasks ? tasks : []} onDelete={deleteTask} onToggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
