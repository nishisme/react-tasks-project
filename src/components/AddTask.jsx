import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/tasksActions';

function AddTask() {
  const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');
    const handleAddTask = () => {
      if(newTask !== ''){
      dispatch(
        addTask(newTask)
      );
    }
    setNewTask('');
  };
    return (
      <div className="task-row bg-color-white">
        <button onClick={handleAddTask} className="button">
        🗲
        </button>
      <input
        type='text'
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        placeholder="What needs to be done?"
        className="task-data"
      />
      </div>
    );
}

export default AddTask;
