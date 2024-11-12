import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  userId: !localStorage.getItem("userId")
    ? null
    : localStorage.getItem("userId"),
  user: !localStorage.getItem("user") ? null : localStorage.getItem("user"),
  token: !localStorage.getItem("sessionId")
    ? null
    : localStorage.getItem("sessionId"),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction(state, action) {
      if (state.token || localStorage.getItem("sessionId")) {
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        localStorage.setItem("userId", JSON.stringify(action.payload?.id));
      } else {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        state.user = null;
        state.userId = null;
      }
      state.token = localStorage.getItem("sessionId");
    },
  },
});

export const { loginAction } = authSlice.actions;
export default authSlice.reducer;
