import TaskItem from "./TaskItem";

const TasksList = ({tasks, removeTask, toggleTaskCompleted}) => {

  return (
    <div>
      {
        tasks.map((task) => 
        <TaskItem 
        key={task.id} 
        removeTask={removeTask}
        toggleTaskCompleted={toggleTaskCompleted}
        {...task}/>)
      }
    </div>
  )
}

export default TasksList