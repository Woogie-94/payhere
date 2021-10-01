import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

const SearchSideBar = (): JSX.Element => {
  return (
    <BarContainer>
      <SearchForm />
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

export default SearchSideBar;
