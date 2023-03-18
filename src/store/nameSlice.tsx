import { createSlice } from "@reduxjs/toolkit";




const nameSlice = createSlice({
  name: "menuClick",
  initialState: {
    value: false,
  },
  reducers: {
    updateMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateMenu } = nameSlice.actions;

export default nameSlice.reducer;


