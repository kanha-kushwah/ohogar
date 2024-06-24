// slice.js
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
  },
});

export const { addUser } = Slice.actions;
export default Slice.reducer;
