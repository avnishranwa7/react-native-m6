import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const mealId = action.payload.id;
      if (state.ids.includes(mealId))
        state.ids.splice(
          state.ids.findIndex((id) => id === mealId),
          1
        );
      else state.ids.push(mealId);
    },
  },
});

export const toggleFavorites = favoritesSlice.actions.toggleFavorites;
export default favoritesSlice.reducer;
