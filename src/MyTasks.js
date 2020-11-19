import React from "react";
import AddTask from "./components/AddTask";
import { useDispatch } from 'react-redux';
import TaskList from "./components/TaskList";
import { setStage } from "./redux/actions/stageActions";

export default function TodoApp() {
  const dispatch = useDispatch();
  return (
    <div className="container">
        <h1>my list</h1>
        <div className="flex-container">
            <div>3 items remaining</div>
                <div className="tabOptions">
                <button onClick={() => dispatch(setStage('ALL'))}>ALL</button>
                <button onClick={() => dispatch(setStage('ACTIVE' ))}>ACTIVE</button>
                <button onClick={() => dispatch(setStage('COMPLETED'))}>COMPLETED</button>
                </div>
            <div>CLEAR COMPLETED</div>
        </div>
        <AddTask />
        <TaskList />
    </div>
  );
}
