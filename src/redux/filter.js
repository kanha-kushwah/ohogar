const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: [],
};

const Slice = createSlice({
  name: "filterdata",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      console.log(action);
      const data = {
        filter: action.payload,
      };
      state.filter.push(data);
    }, 
    removeFilter: (state) => {
      state.filter = [];
    },
  },
});

export const { addFilter, removeFilter } = Slice.actions;
export default Slice.reducer;
