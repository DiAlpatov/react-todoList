
const CreateTask = ({text, handleInput, handleSubmit}) => {

  return (
    <label>
      <input value={text} onChange={ (e) => { handleInput(e.target.value) }} />
      <button onClick={handleSubmit}>Add task</button>
    </label>
  )
}

export default CreateTask