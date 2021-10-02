import { createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { Repo } from "../types";

const initialState: Repo[] = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    getState: (state, action) => {
      return action.payload ? JSON.parse(action.payload) : [];
    },
    addRepo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state));
    },
    removeRepo: (state, action) => {
      const removeState = state.filter((repo) => repo.id !== action.payload.id);
      localStorage.setItem("favorite", JSON.stringify(removeState));

      return removeState;
    },
  },
});

export const { getState, addRepo, removeRepo } = favoriteSlice.actions;
export const favoriteSelector = (state: RootStateOrAny) => state.favoriteSlice;
