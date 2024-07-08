const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  token: null,
};

const tokenSlice = createSlice({
  name: "addtoken",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { addToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
