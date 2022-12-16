import {useSelector} from "react-redux"
import TaskItem from "./TaskItem";


const TasksList = () => {
const tasks = useSelector(state => state.task.tasks)

  return (
    <div>
      {
        tasks.map((task) => (
        <TaskItem 
        key={task.id} 
        {...task}/>)
      )}
    </div>
  )
}

export default TasksList