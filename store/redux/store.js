import { configureStore } from "@reduxjs/toolkit";

// local imports
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
