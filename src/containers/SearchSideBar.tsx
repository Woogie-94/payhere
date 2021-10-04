import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReposSelector } from "../reducer/repos";
import { RepoReducerState, REQUEST_STATE } from "../types";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";

const SearchSideBar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);
  const { state, total_count }: RepoReducerState = useSelector(ReposSelector);

  const onOpenAndClose = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <BarContainer open={open}>
      <OpenAndClose onClick={onOpenAndClose}>{open ? <HiChevronDoubleRight /> : <HiChevronDoubleLeft />}</OpenAndClose>
      <Title>검색</Title>
      <SearchForm />
      <TotalCount>검색 결과: {state === REQUEST_STATE.SUCCESS ? total_count : "-"}</TotalCount>
      <SearchList />
    </BarContainer>
  );
};

const BarContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-450px")};
  width: 450px;
  height: 100%;
  padding: 50px 30px;
  background-color: #fff;
  border-left: 1px solid #d6d6d8;

  transition: 0.2s;
`;

const Title = styled.h2`
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TotalCount = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
`;

const OpenAndClose = styled.div`
  position: absolute;
  top: 20px;
  left: -30px;
  font-size: 20px;
  color: #333;
`;

export default SearchSideBar;
