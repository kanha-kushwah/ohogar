const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todos:[]
  };

  const Slice = createSlice({
    name: "addTodo",
    initialState, 
    reducers: {
        addTodo: (state, action) => {
          console.log(action);
          const data = {
            id: nanoid(),
            name: action.payload,
          };
          state.todos.push(data);
        },
      },
  });

  export const { addTodo } = Slice.actions;
export default Slice.reducer;