import React from 'react';
import { useState } from 'react';
import TasksList from './components/TasksList';
import CreateTask from './components/CreateTask';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const addTask = () => {
    if (text.trim().length) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          isCheked: false
        }
      ])
      setText("")
    }
  }

  const toggleTaskCompleted = (taskId) => {
    setTasks(
      tasks.map(task => {
        if(task.id !== taskId) return task
        return {
          ...task,
          isCheked: !task.isCheked
        }
      })
    )
  }

  const removeTask = (taskId) => {
    setTasks(tasks.filter(item => item.id !== taskId))
  }

  return (
    <div className="App">
      <CreateTask text={text} handleInput={setText} handleSubmit={addTask}/>
      <TasksList tasks={tasks} removeTask={removeTask} toggleTaskCompleted={toggleTaskCompleted}/>
    </div>
  )
}
export default App;
