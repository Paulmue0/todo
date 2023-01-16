// store.js
import { reactive } from 'vue'

export const state = reactive({
  tasks: [],
});
const ADD_TASK = (task) => {
    state.tasks = [{content: task, done: false}, ...state.tasks]
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
};
const REMOVE_TASK = (task) => {
    state.tasks.splice(state.tasks.indexOf(task), 1)
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
};
const TOGGLE_TASK = (task) => {
    task.done = !task.done
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
};
const INIT_STORE = (newState) => {
    if(localStorage.getItem('tasks')) {
        state.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
};

export default {
    state: state, ADD_TASK, REMOVE_TASK, TOGGLE_TASK, INIT_STORE,
    watch: {
        tasks(newTasks) {
                localStorage.tasks = newTasks;
            }
        }
};