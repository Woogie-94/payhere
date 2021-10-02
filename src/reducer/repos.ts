import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootStateOrAny } from "react-redux";
import { Repo, RepoReducerState, REQUEST_STATE } from "../types";

export const getRepos = createAsyncThunk("getRepos", async ({ searchValue, page }: { searchValue: string; page: number }) => {
  const { data } = await axios.get(`https://api.github.com/search/repositories?q=${searchValue}&per_page=10&page=${page}`);

  return data;
});

const initialState: RepoReducerState = {
  state: REQUEST_STATE.INIT,
  error: "",
  searchValue: "",
  empty: false,
  repos: [],
  total_count: 0,
};

export const reposSlice = createSlice({
  name: "reposSlice",
  initialState,
  reducers: {
    resetRepos: (state) => {
      state.repos = [];
      state.total_count = 0;
      state.state = REQUEST_STATE.INIT;
      state.error = "";
      state.searchValue = "";
    },
  },
  extraReducers: (bulider: ActionReducerMapBuilder<RepoReducerState>): void => {
    bulider
      .addCase(getRepos.pending, (state, action) => {
        state.state = REQUEST_STATE.PENDING;
      })
      .addCase(getRepos.fulfilled, (state, action) => {
        const repos: Repo[] = action.payload.items;

        state.state = REQUEST_STATE.SUCCESS;
        state.searchValue = action.meta.arg.searchValue;
        state.total_count = action.payload.total_count;
        state.empty = repos.length === 0;
        state.repos = [...state.repos, ...repos];
      })
      .addCase(getRepos.rejected, (state, action) => {
        state.state = REQUEST_STATE.FAILED;
        state.repos = [];
        console.error(action.error.stack);
      });
  },
});

export const { resetRepos } = reposSlice.actions;
export const ReposSelector = (state: RootStateOrAny) => state.reposSlice;
