import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "./favorite";
import { issuesSlice } from "./issues";
import { reposSlice } from "./repos";

export default configureStore({
  reducer: {
    reposSlice: reposSlice.reducer,
    favoriteSlice: favoriteSlice.reducer,
    issuesSlice: issuesSlice.reducer,
  },
});
