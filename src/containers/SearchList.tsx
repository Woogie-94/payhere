import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import RepoCard from "../components/RepoCard";
import { ReposSelector } from "../reducer/repos";
import { RepoReducerState, REQUEST_STATE } from "../types";
import Loading from "../components/Loading";

const SearchList = (): JSX.Element => {
  const { state, repos, empty }: RepoReducerState = useSelector(ReposSelector);

  useEffect(() => {
    if (empty) alert("검색 결과가 없습니다.");
  }, [empty]);

  return (
    <ListContainer>
      {state === REQUEST_STATE.INIT && <FailedMessage>검색을 이용해보세요</FailedMessage>}
      {state === REQUEST_STATE.FAILED && <FailedMessage>잘못된 검색입니다.</FailedMessage>}
      {state === REQUEST_STATE.PENDING && <Loading />}
      {repos.map((repo) => (
        <RepoCard key={repo.id} {...repo} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  overflow: overlay;
  position: relative;
  width: 100%;
  height: calc(100% - 70px);

  &::-webkit-scrollbar {
    width: 8px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
  }
`;

const FailedMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #aaa;
`;

export default SearchList;
