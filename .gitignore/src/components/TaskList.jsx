import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTasksByStage } from '../utils';
import { toggleTask } from '../redux/actions/tasksActions';

function TaskList() {
    const dispatch = useDispatch();
    const stage = useSelector((state) => state.stage.stage);
    const tasks = useSelector((state) => state.tasks.tasks);
    const tasksByStage = getTasksByStage(stage, tasks);
    const handleToggleTask = (id, completed) => {
      document.getElementById(`${id}button`).innerHTML = completed ? "↳" : "✓";
      document.getElementById(`${id}content`).style.textDecoration  = completed ? "" : "line-through";
      dispatch(
        toggleTask(id)
      );
  };
    return(
        <ul className="task-row">
    {tasksByStage && Object.values(tasksByStage).length
      // eslint-disable-next-line array-callback-return
      ? Object.values(tasksByStage).map((task, index) => {
        return(
          <li key={task.id} className="bg-color-white">
            {/* <input type="checkbox" id={task.id} name="gender" value={task.completed}onClick={(e) => {
              handleToggleTask(task.id);
            }}
            className="button"
            ></input> */}
            <button 
            id={`${task.id}button`}
            onClick={(e) => {
              handleToggleTask(task.id, task.completed);
            }} 
            value={task.completed}
            className="button">{task.completed ? "✓" : "↳"}</button>
            <span className="task-data" id={`${task.id}content`}>{task.payload}</span>
          </li>
        );
        })
      : "No Tasks"}
  </ul>
    );
}

export default TaskList;
