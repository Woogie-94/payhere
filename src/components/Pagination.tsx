import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { issuesSelector, paging } from "../reducer/issues";
import { IssueReducerState } from "../types";

const Pagination = (): JSX.Element => {
  const [page, setPage] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [pageBundle, setPageBundle] = useState<number>(0);

  const dispatch = useDispatch();
  const { issues, pageNumber }: IssueReducerState = useSelector(issuesSelector);

  const maxPage = Math.ceil(issues.length / 5);

  useEffect(() => {
    const newPage: number[] = [];
    for (let i = 1; i <= maxPage; i++) newPage.push(i);

    setPage(() => newPage);
  }, [maxPage]);

  const onNext = useCallback(() => {
    if (pageBundle < maxPage - 10) {
      setPageBundle((n) => n + 10);
      dispatch(paging(pageBundle + 10));
    }
  }, [pageBundle, maxPage, dispatch]);

  const onPrev = useCallback(() => {
    if (pageBundle > 0) {
      setPageBundle((n) => n - 10);
      dispatch(paging(pageBundle - 10));
    }
  }, [pageBundle, dispatch]);

  const onPaging = useCallback(
    (n: number) => {
      dispatch(paging(n));
    },
    [dispatch]
  );

  return (
    <PaginationContainer>
      <DirectionBox onClick={onPrev}>{"<"}</DirectionBox>
      {page.slice(pageBundle, pageBundle + 10).map((n) => (
        <PageBox key={n} current={pageNumber === n - 1} onClick={() => onPaging(n - 1)}>
          {n}
        </PageBox>
      ))}
      <DirectionBox onClick={onNext}>{">"}</DirectionBox>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
`;

const PageBox = styled.div<{ current?: boolean }>`
  background-color: ${({ current }) => (current ? "#478bff" : "#fff")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${({ current }) => (current ? "#fff" : "#337ab7")};
  font-size: 14px;
  border: 1px solid ${({ current }) => (current ? "#478bff" : "#ddd")};
`;

const DirectionBox = styled(PageBox)``;

export default Pagination;
