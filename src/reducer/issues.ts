import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { Issue, IssueReducerState, REQUEST_STATE } from "../types";

type ReqcursiveRequsetFuntion = (createIssuePromise: (page: number) => Promise<any>[], page: number) => Promise<Issue[]>;

const recursiveRequest: ReqcursiveRequsetFuntion = async (createIssuePromise, page) => {
  const issues: Issue[] = [];
  const issuesBundle: { data: [] }[] = await Promise.all([...createIssuePromise(page)]);

  issuesBundle.forEach((issue) => {
    issues.push(...issue.data);
  });

  if (issues.length === 0) return [];

  const recursiveResult = await recursiveRequest(createIssuePromise, page + 1);

  issues.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  return [...issues, ...recursiveResult];
};

export const getIssues = createAsyncThunk("getIssues", async (createIssuePromise: (page: number) => Promise<any>[]) => {
  return await recursiveRequest(createIssuePromise, 1);
});

const initialState: IssueReducerState = {
  state: REQUEST_STATE.INIT,
  error: "",
  issues: [],
};

export const issuesSlice = createSlice({
  name: "issuesSlice",
  initialState,
  reducers: {
    resetIssues: (state) => {
      state.issues = [];
    },
  },
  extraReducers: (bulider: ActionReducerMapBuilder<IssueReducerState>) => {
    bulider
      .addCase(getIssues.pending, (state, action) => {
        state.state = REQUEST_STATE.PENDING;
        console.log(action);
      })
      .addCase(getIssues.fulfilled, (state, action) => {
        state.state = REQUEST_STATE.SUCCESS;
        state.issues = action.payload;
        console.log(action);
      })
      .addCase(getIssues.rejected, (state, action) => {
        state.state = REQUEST_STATE.FAILED;
        console.error(action.error.stack);
      });
  },
});

export const { resetIssues } = issuesSlice.actions;
export const issuesSelector = (state: RootStateOrAny) => state.issuesSlice;
