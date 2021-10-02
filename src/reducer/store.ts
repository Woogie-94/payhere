import { configureStore } from "@reduxjs/toolkit";
import { reposSlice } from "./repos";

export default configureStore({
  reducer: {
    reposSlice: reposSlice.reducer,
  },
});
