import { createSlice } from "@reduxjs/toolkit";
 const movieSlice = createSlice({
  initialState: {
    movie: [],
  },
  name: "movie",
  reducers: {
    getFiteredMovies(state, action) {
      state.movie = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { getFiteredMovies } = movieSlice.actions;
