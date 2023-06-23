import { createSlice } from "@reduxjs/toolkit";
import translations from "./languages";

export const UpdateSlice = createSlice({
  name: "language",
  initialState: {
    Update: translations.spanish,
    error: null,
  },
  reducers: {
    setUpdate: (state, action) => {
      state.Update = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUpdate, setError } = UpdateSlice.actions;

export const StateUpdate = (dis) => (dispatch) => {
  console.log(dis);

  if (dis == "Es") {
    dispatch(setUpdate(translations.spanish));
  } else {
    dispatch(setUpdate(translations.english));
  }
};

export default UpdateSlice.reducer;
