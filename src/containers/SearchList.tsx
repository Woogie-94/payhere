import React from "react";
import styled from "styled-components";
import RepoCard from "../components/RepoCard";

const SearchList = (): JSX.Element => {
  return (
    <ListContainer>
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  overflow: overlay;
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

export default SearchList;
