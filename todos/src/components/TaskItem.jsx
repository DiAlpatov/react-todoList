import { useDispatch } from "react-redux"
import { removeTask, toggleTaskCompleted } from "../store/taskSlice"
const TaskItem = ({ isCheked, id, text}) => {
  const dispatch = useDispatch()

  return (
    <div className="item">
      <input
        type='checkbox'
        checked={isCheked}
        onChange={() => dispatch(toggleTaskCompleted({id}))} />
      <span>{text}</span>
      <button 
        className="delete" 
        onClick={() => dispatch(removeTask({id}))}>
        &times;
        </button>
    </div>
  )
}

export default TaskItem