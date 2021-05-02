export const ADD_TASK = (task) => {
    return {
        type: "ADD_TASK",
        payload: task,
    }
};

export const DELETE_TASK = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id,
    }
};

export const UPDATE_TASK = (id) => {
    return {
        type: "UPDATE_TASK",
        payload: id,
    }
};

export const TOGGLE_REMINDER = (id) => {
    return {
        type: "TOGGLE_REMINDER",
        payload: id,
    }
};

export const SHOW_TASK_FORM = (showForm) => {
    return {
        type: "SHOW_TASK_FORM",
        payload: showForm,
    }
};