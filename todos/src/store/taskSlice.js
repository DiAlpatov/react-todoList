import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'tasks',
  initialState:{
    tasks: []
  },
  reducers: {
    addTask(state, action) {
      console.log(" state", state)
      console.log(" action", action)
      state.tasks.push({
        id: Date.now(),
        text: action.payload.text,
        isCheked: false
      })
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id) 
},
    toggleTaskCompleted(state, action) {
      const toggleTask = state.tasks.find(task => task.id === action.payload.id)
      toggleTask.isCheked = !toggleTask.isCheked
    },
  }
})

export const {addTask, removeTask, toggleTaskCompleted} = taskSlice.actions
export default taskSlice.reducer