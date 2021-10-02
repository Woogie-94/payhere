import React, { memo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import { getRepos, resetRepos } from "../reducer/repos";

const SearchForm = (): JSX.Element => {
  const [searchValue, onSerachValue] = useInput<string>("");
  const dispatch = useDispatch();
  console.log("form");
  const repo = useCallback(async (): Promise<void> => {
    dispatch(resetRepos());
    dispatch(getRepos({ searchValue, page: 1 }));
  }, [searchValue, dispatch]);

  useEffect(() => {}, [searchValue]);

  return (
    <FormContainer>
      <Input styleType="searchInput" placeholder="검색하실 제목을 입력하세요." value={searchValue} onChange={onSerachValue} />
      <SearchBtn onClick={repo}>검색</SearchBtn>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const SearchBtn = styled.button`
  width: 20%;
  height: 40px;
  background-color: #478bff;
  color: #fff;

  &:hover {
    background-color: #467aee;
  }
`;

export default memo(SearchForm);
