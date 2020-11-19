import { createStore, combineReducers } from "redux";
import tasks from './actions/tasksActions';
import stage from './actions/stageActions';

const rootReducer = combineReducers({
    tasks,
    stage
})
const store = createStore(rootReducer);
export default store;
