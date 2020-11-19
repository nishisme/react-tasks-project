  
import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  tasks: {}
};
let nextTaskId = -1;
export const { addTask, toggleTask } = createActions(
  {
    ADD_TASK: (payload) => payload,
    TOGGLE_TASK: (payload) => payload
  }
)

const reducer = handleActions(
  {
    [addTask]: (_state, { payload }) => {
      nextTaskId++;
      return {
        ..._state,
        tasks: {
          ..._state.tasks,
          [nextTaskId]: {
            id: nextTaskId,
            payload,
            completed: false
          }
        }
      };
    },
    [toggleTask]: (_state, { payload }) => {
      _state.tasks[payload].completed = !_state.tasks[payload].completed; 
      return {
        ..._state
        };
    }
  },
  defaultState
);

export default reducer;