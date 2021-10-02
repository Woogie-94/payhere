import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReposSelector } from "../reducer/repos";
import { RepoReducerState, REQUEST_STATE } from "../types";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

const SearchSideBar = (): JSX.Element => {
  const { state, total_count }: RepoReducerState = useSelector(ReposSelector);

  return (
    <BarContainer>
      <SearchForm />
      <TotalCount>검색 결과: {state === REQUEST_STATE.SUCCESS ? total_count : "-"}</TotalCount>
      <SearchList />
    </BarContainer>
  );
};

const BarContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 450px;
  height: calc(100vh - 80px);
  padding: 50px 30px;
  background-color: #fff;
  border-left: 1px solid #d6d6d8;
`;

const TotalCount = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
`;

export default SearchSideBar;
