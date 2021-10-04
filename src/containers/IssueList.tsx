import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { favoriteSelector } from "../reducer/favorite";
import { Repo, IssueReducerState, REQUEST_STATE } from "../types";
import { getIssues, issuesSelector, resetIssues } from "../reducer/issues";
import Loading from "../components/Loading";
import ListTop from "../components/ListTop";
import IssueItem from "../components/IssueItem";
import Pagination from "../components/Pagination";
import EmptyResultInfo from "../components/EmptyResultInfo";

const IssueList = (): JSX.Element => {
  const favoriteRepos = useSelector(favoriteSelector) && (JSON.parse(localStorage.getItem("favorite")!) as Repo[]);
  const { issues, state, pageNumber }: IssueReducerState = useSelector(issuesSelector);
  const dispatch = useDispatch();

  const createIssuePromise = useCallback((page: number): Promise<any>[] => {
    const promises = favoriteRepos.map((repo: Repo) => {
      const [owner, name] = repo.full_name.split("/");

      return axios(`https://api.github.com/repos/${owner}/${name}/issues?per_page=100&page=${page}`);
    });

    return promises;
  }, []);

  const createIssues = useCallback(() => {
    // IssueItem Component를 반환하는 함수입니다.
    const issuesPageRange = issues.slice(pageNumber * 5, pageNumber * 5 + 5);

    return issuesPageRange.map((issue) => <IssueItem key={issue.id} {...issue} />);
  }, [issues, pageNumber]);

  useEffect(() => {
    dispatch(getIssues(createIssuePromise));

    return () => {
      dispatch(resetIssues());
    };
  }, [dispatch, createIssuePromise]);

  return (
    <IssueListContainer>
      <ListTop title="관심 이슈" btnTitle="관심 레포지토리" url={"/"} />
      <ListContainer>
        {state === REQUEST_STATE.PENDING && <Loading />}
        {issues.length === 0 && <EmptyResultInfo body="이슈가 없습니다." />}
        {createIssues()}
      </ListContainer>
      <Pagination />
    </IssueListContainer>
  );
};

const IssueListContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-top: 50px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 30px;
`;

export default IssueList;
