import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from './store/taskSlice';
import TasksList from './components/TasksList';
import CreateTask from './components/CreateTask';

import './App.css';

const App = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const createAddTask = () => { 
    dispatch(addTask({text}))
    setText('')
  }
  
  return (
    <div className="App">
      <CreateTask text={text} handleInput={setText} handleSubmit={createAddTask}/>
      <TasksList />
    </div>
  )
}
export default App;
