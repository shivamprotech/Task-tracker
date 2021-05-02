import logger from "redux-logger";
import { ADD_TASK } from "../actions/taskActions";

const initial_state = {
    tasks: [
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
    ]
}

function reducer(state = initial_state, action) {
    switch(action.type) {
        case "ADD_TASK":
            return {
              ...state,
              tasks: [...state.tasks, action.payload]
            }
        case "DELETE_TASK":
            return {
              ...state,
              tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
        case "UPDATE_TASK":
          const updatedTasks = state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              return Object.assign({}, task, action.payload)
            }
            return task;
          })

          return {
            ...state,
            tasks: updatedTasks,
          }
        case "TOGGLE_REMINDER":
          const task = state.tasks.find((task) => task.id === action.payload);
          task.reminder = !task.reminder;
          return {
            ...state,
            tasks: [...state.tasks]
          }
        case "SHOW_TASK_FORM":
          return {
            ...state,
            showTask: action.payload,
          }
        default:
            return state
    }
}

export default reducer;