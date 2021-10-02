import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "./favorite";
import { reposSlice } from "./repos";

export default configureStore({
  reducer: {
    reposSlice: reposSlice.reducer,
    favoriteSlice: favoriteSlice.reducer,
  },
});
