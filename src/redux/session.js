const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: "adduser",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        user: action.payload,
      };
      state.users.push(data);
    }, 
    removeUser: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
