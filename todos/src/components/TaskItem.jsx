
const TaskItem = ({ isCheked, id, text, toggleTaskCompleted, removeTask }) => {

  return (
    <div key={`tasks + ${text}`}>
      <input
        type='checkbox'
        checked={isCheked}
        onChange={() => toggleTaskCompleted(id)} />
      <span>{text}</span>
      <button onClick={() => removeTask(id)}>Delete</button>
    </div>
  )
}

export default TaskItem