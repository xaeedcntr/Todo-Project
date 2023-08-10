import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state: any, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeTodo(state, action) {
      console.log("Id : " + action.payload);
      //@ts-ignore
      state.splice(action.payload, 1);
    },
    updateTodo(state: any, action) {
      const { id, data } = action.payload;
      state[id] = data;
    },
    removeAlltodo(state, action) {
      return [];
    },
  },
});
export const { addTodo, removeTodo, removeAlltodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
